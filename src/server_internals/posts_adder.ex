defmodule PostsAdder do

  require ServerState
  require UserPost
  require HashtagPost
  require Post

  def add_post(_user, _hash_tags, _content, state) do
    new_post = insert_post(_user, _hash_tags, _content, state)
               |> find_newly_inserted_post(state)
    dispatch_insertion_to_users(new_post, state)
    dispatch_insertion_to_hash_tags(new_post, state)
    {:reply, new_post.post_id, state}
  end

  defp insert_post(_user, _hash_tags, _content, state) do
    db_put = & :riakc_pb_socket.put(state.riak_pid, &1)
    new_post = & :riakc_obj.new(state.posts, :undefined, &1)
    {:ok, response} =
      %Post{
        content: _content,
        user: _user,
        hash_tags: _hash_tags
      } |> new_post.() |> db_put.()
    response
  end

  defp find_newly_inserted_post(key, state) do
    {:ok, object} = :riakc_pb_socket.get(state.riak_pid, state.posts, key)
    post = :riakc_obj.get_value(object) |> :erlang.binary_to_term()
    %Post{
      content: post.content,
      user: post.user,
      hash_tags: post.hash_tags,
      post_id: key
    }
  end

  defp dispatch_insertion_to_users(_new_post, _state) do
    :riakc_pb_socket.get(_state.riak_pid, _state.users, _new_post.user)
    |> insert_post_to_user_posts(_new_post, _state)
  end

  defp insert_post_to_user_posts({:error, _}, _new_post, _state) do
    obj = %UserPost{
            user: _new_post.user,
            posts: %{_new_post.post_id => _new_post}
          } |> RiakUtils.new_user(_state)
    update_meta_and_put_to_db(obj, _state.riak_pid, _new_post)
  end

  defp insert_post_to_user_posts({:ok, _old_entry}, _new_post, _state) do
    {_old_entry_meta, _old_entry_val} = prep_old_ent_va_meta_pair(_old_entry)
    obj = %UserPost{
            user: _old_entry_val.user,
            posts: Map.put(_old_entry_val.posts, _new_post.post_id, _new_post)
          } |> RiakUtils.new_user(_state)
    app_sec_idx_and_put_to_db(obj, _state.riak_pid, _old_entry_meta, _new_post)
  end

  defp dispatch_insertion_to_hash_tags(_new_post, _state) do
    process_tag = & :riakc_pb_socket.get(_state.riak_pid, _state.hashes, &1)
                    |> insert_post_to_hash_tags(&1, _new_post, _state)
    _new_post.hash_tags |> Enum.each(process_tag)
  end

  defp insert_post_to_hash_tags({:error, _}, _hash_tag, _new_post, _state) do
    obj = %HashtagPost{ hash_tag: _hash_tag, posts: %{_new_post.post_id =>_new_post}}
          |> RiakUtils.new_ht(_state)
    update_meta_and_put_to_db(obj, _state.riak_pid, _new_post)
  end

  defp insert_post_to_hash_tags({:ok, _old_entity}, _hash_tag, _new_post, _state) do
    {_old_entity_meta, _old_entity_val} = prep_old_ent_va_meta_pair(_old_entity)
    obj = %HashtagPost{
            hash_tag: _hash_tag,
            posts: Map.put(_old_entity_val.posts, _new_post.post_id, _new_post)
          } |> RiakUtils.new_ht(_state)
    app_sec_idx_and_put_to_db(obj, _state.riak_pid, _old_entity_meta, _new_post)
  end

  defp app_sec_idx_and_put_to_db(obj, riak_pid, _old_entry_meta, _new_post) do
    old_sec_idx =
      :riakc_obj.get_secondary_index(_old_entry_meta, {:binary_index, <<"post_id">>})
    update_meta_and_put_to_db(obj, riak_pid, _new_post, old_sec_idx)
  end

  defp update_meta_and_put_to_db(obj, riak_pid, _new_post, old_sec_idx \\ []) do
    new_meta = obj
               |> :riakc_obj.get_update_metadata()
               |> :riakc_obj.set_secondary_index(
                    [{{:binary_index, <<"post_id">>}, [_new_post.post_id | old_sec_idx]}]
                  )
    obj |> :riakc_obj.update_metadata(new_meta) |> RiakUtils.db_put(riak_pid)
  end

  defp prep_old_ent_va_meta_pair(_old_entity) do
    _old_entity_meta = _old_entity |>  :riakc_obj.get_update_metadata()
    _old_entity_val = _old_entity |> :riakc_obj.get_value() |> :erlang.binary_to_term()
    {_old_entity_meta, _old_entity_val}
  end

end
