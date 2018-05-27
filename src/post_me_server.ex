defmodule PostMeServer do

  use GenServer
  require ServerState
  require UserPost
  require HashtagPost
  require Post

  # CLIENT API

  def add_post(user, hash_tags, content) do
    GenServer.call(PostMeServer, {:add_post, user, hash_tags, content})
  end

  def find_user_posts(user) do
    GenServer.call(PostMeServer, {:get_user_posts, user})
  end

  def find_hashtag_posts(hashtag) do
    GenServer.call(PostMeServer, {:get_hashtag_posts, hashtag})
  end

  def list_all_hashtags() do
    GenServer.call(PostMeServer, {:get_hashtag_list})
  end

  def list_all_users() do
    GenServer.call(PostMeServer, {:get_user_list})
  end

  def delete_post(post_id) do
    GenServer.call(PostMeServer, {:delete_post, post_id})
  end

  # GenServer core

  def start_link() do
    GenServer.start_link(__MODULE__, [], name: __MODULE__)
  end

  def init([]) do
    :riakc_pb_socket.start_link('127.0.0.1', 8087, [{:queue_if_disconnected, true}])
    |> handle_init
  end

  def handle_call({:add_post, user, hash_tags, content}, _from, state) when is_list(hash_tags) do
    add_post(user, hash_tags, content, state)
  end
  def handle_call({:add_post, user, hash_tag, content}, _from, state) do
    add_post(user, [hash_tag], content, state)
  end
  def handle_call({:get_user_posts, user}, _from, state) do
    get_user_posts(user, state)
  end
  def handle_call({:get_hashtag_posts, hash_tag}, _from, state) do
    get_hashtag_posts(hash_tag, state)
  end
  def handle_call({:get_hashtag_list}, _from, state) do
    get_hashtag_list(state)
  end
  def handle_call({:get_user_list}, _from, state) do
    get_user_list(state)
  end
  def handle_call({:delete_post, post_id}, _from, state) do
    remove_post_from_database(post_id, state)
  end
  def handle_call(:stop, _from, state) do
    {:stop, :normal, state}
  end

  def terminate(reason, state) do
    :riakc_pb_socket.stop(state.riak_pid)
    IO.puts "PostMeServer has terminated.\n"
  end

  defp handle_init({:ok, srv_pid}) do
    state = %ServerState{users: <<"Users">>, posts: <<"Posts">>, hashes: <<"Hashes">>, riak_pid: srv_pid}
    {:ok, state}
  end

  #  Private functions

  defp handle_init({:error, _}) do
    {:stop, :cannot_connect_to_database}
  end

  defp add_post(_user, _hash_tags, _content, state) do
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
    db_put = & :riakc_pb_socket.put(_state.riak_pid, &1)
    new_user = & :riakc_obj.new(_state.users, &1.user, &1)
    obj = %UserPost{
            user: _new_post.user,
            posts: %{_new_post.post_id => _new_post}
    } |> new_user.()
    new_meta = obj
      |> :riakc_obj.get_update_metadata()
      |> :riakc_obj.set_secondary_index([{{:binary_index, <<"post_id">>}, [_new_post.post_id]}])
    obj |> :riakc_obj.update_metadata(new_meta) |> db_put.()
  end
  defp insert_post_to_user_posts({:ok, _old_entry}, _new_post, _state) do
    db_put = & :riakc_pb_socket.put(_state.riak_pid, &1)
    new_user = & :riakc_obj.new(_state.users, &1.user, &1)
    _old_entry_val = :riakc_obj.get_value(_old_entry) |> :erlang.binary_to_term()
    obj = %UserPost{
            user: _old_entry_val.user,
            posts: Map.put(_old_entry_val.posts, _new_post.post_id, _new_post)
          } |> new_user.()
    _old_entry_meta = _old_entry |>  :riakc_obj.get_update_metadata()
    old_sec_idx = :riakc_obj.get_secondary_index(_old_entry_meta, {:binary_index, <<"post_id">>})
    new_meta = obj
               |> :riakc_obj.get_update_metadata()
               |> :riakc_obj.set_secondary_index(
                    [{{:binary_index, <<"post_id">>},
                      [_new_post.post_id | old_sec_idx]}]
               )
    obj |> :riakc_obj.update_metadata(new_meta) |> db_put.()
  end

  defp dispatch_insertion_to_hash_tags(_new_post, _state) do
    process_tag = & :riakc_pb_socket.get(_state.riak_pid, _state.hashes, &1)
                  |> insert_post_to_hash_tags(&1, _new_post, _state)
    _new_post.hash_tags |> Enum.each(process_tag)
  end

  defp insert_post_to_hash_tags({:error, _}, _hash_tag, _new_post, _state) do
    db_put = & :riakc_pb_socket.put(_state.riak_pid, &1)
    new_ht = & :riakc_obj.new(_state.hashes, &1.hash_tag, &1)
    obj = %HashtagPost{ hash_tag: _hash_tag, posts: %{_new_post.post_id =>_new_post}}
          |> new_ht.()
    new_meta = obj |> :riakc_obj.get_update_metadata()
                   |> :riakc_obj.set_secondary_index(
                          [{{:binary_index, <<"post_id">>}, [_new_post.post_id]}])
    obj |> :riakc_obj.update_metadata(new_meta) |> db_put.()
  end
  defp insert_post_to_hash_tags({:ok, _old_entity}, _hash_tag, _new_post, _state) do
    db_put = & :riakc_pb_socket.put(_state.riak_pid, &1)
    new_ht = & :riakc_obj.new(_state.hashes, &1.hash_tag, &1)
    _old_entity_meta = _old_entity |>  :riakc_obj.get_update_metadata()
    _old_entity_val = :riakc_obj.get_value(_old_entity) |> :erlang.binary_to_term()
    obj = %HashtagPost{
            hash_tag: _hash_tag,
            posts: Map.put(_old_entity_val.posts, _new_post.post_id, _new_post)
          } |> new_ht.()
    old_sec_idx = :riakc_obj.get_secondary_index(_old_entity_meta, {:binary_index, <<"post_id">>})
    new_meta = obj |> :riakc_obj.get_update_metadata()
               |> :riakc_obj.set_secondary_index(
                    [{{:binary_index, <<"post_id">>}, [_new_post.post_id | old_sec_idx]}])
    obj |> :riakc_obj.update_metadata(new_meta) |> db_put.()
  end

  defp get_user_posts(user, state) do
    :riakc_pb_socket.get(state.riak_pid, state.users, user)
    |> dispatch_get_record_response(state)
  end

  defp get_hashtag_posts(hash_tag, state) do
    :riakc_pb_socket.get(state.riak_pid, state.hashes, hash_tag)
    |> dispatch_get_record_response(state)
  end

  defp get_hashtag_list(state) do
    :riakc_pb_socket.list_keys(state.riak_pid, state.hashes)
    |> dispatch_get_list_response(state)
  end

  defp get_user_list(state) do
    :riakc_pb_socket.list_keys(state.riak_pid, state.users)
    |> dispatch_get_list_response(state)
  end

  defp dispatch_get_record_response({:error, reason}, state) do
    {:reply, {:error, reason}, state}
  end
  defp dispatch_get_record_response({:ok, object}, state) do
    result = :riakc_obj.get_value(object) |> :erlang.binary_to_term()
    {:reply, result, state}
  end

  defp dispatch_get_list_response({:error, reason}, state) do
    {:reply, {:error, reason}, state}
  end
  defp dispatch_get_list_response({:ok, list}, state) do
    {:reply, list, state}
  end

  defp remove_post_from_hashes(post_id, state) do
    :riakc_pb_socket.get_index(
      state.riak_pid,
      {<<"indexes">>, state.hashes},
      {:binary_index, 'post_id'},
      post_id
    ) |> dispatch_hashes_removal(post_id, state)
  end

  defp dispatch_hashes_removal({:ok, {:index_results_v1, res, _, _}}, post_id, state) do
    res |> Enum.each(& remove_from_single_ht_entry(&1, post_id, state))
    {:reply, :ok, state}
  end
  defp dispatch_hashes_removal(_, state) do
    {:reply, {:error, :unable_to_delete}, state}
  end

  defp remove_from_single_ht_entry(hash_tag, post_id, _state) do
    db_put = & :riakc_pb_socket.put(_state.riak_pid, &1)
    make_new_ht_object = & :riakc_obj.new(_state.hashes, &1.hash_tag, &1)
    {:ok, ht_object} = :riakc_pb_socket.get(_state.riak_pid, _state.hashes, hash_tag)
    :ok = :riakc_pb_socket.delete(_state.riak_pid, _state.hashes, hash_tag)
    ht_struct = :riakc_obj.get_value(ht_object) |> :erlang.binary_to_term()
    {_, new_posts} = Map.pop(ht_struct.posts, post_id)
    new_ht_struct = %HashtagPost{
      hash_tag: hash_tag,
      posts: new_posts
    }
    new_ht_object = new_ht_struct |> make_new_ht_object.()
    old_meta = ht_object |> :riakc_obj.get_metadata()
    old_sec_idx = :riakc_obj.get_secondary_index(old_meta, {:binary_index, <<"post_id">>})
    new_sec_idx = List.delete(old_sec_idx, post_id)
    case new_sec_idx do
       [] -> :ok
       _ -> new_meta = new_ht_object
                       |> :riakc_obj.get_update_metadata()
                       |> :riakc_obj.set_secondary_index(
                            [{{:binary_index, <<"post_id">>}, new_sec_idx}])
            :ok = new_ht_object |> :riakc_obj.update_metadata(new_meta) |> db_put.()
    end
  end

  defp remove_post_from_users(post_id, state) do
    :riakc_pb_socket.get_index(
      state.riak_pid,
      {<<"indexes">>, state.users},
      {:binary_index, 'post_id'},
      post_id
    ) |> dispatch_users_removal(post_id, state)
  end

  defp dispatch_users_removal({:ok, {:index_results_v1, res, _, _}}, post_id, state) do
    res |> Enum.each(& remove_from_single_user_entry(&1, post_id, state))
    {:reply, :ok, state}
  end
  defp dispatch_users_removal(_, state) do
    {:reply, {:error, :unable_to_delete}, state}
  end

  defp remove_from_single_user_entry(user, post_id, _state) do
    db_put = & :riakc_pb_socket.put(_state.riak_pid, &1)
    make_new_user_object = & :riakc_obj.new(_state.users, &1.user, &1)
    {:ok, user_object} = :riakc_pb_socket.get(_state.riak_pid, _state.users, user)
    :ok = :riakc_pb_socket.delete(_state.riak_pid, _state.users, user)
    user_struct = :riakc_obj.get_value(user_object) |> :erlang.binary_to_term()
    {_, new_posts} = Map.pop(user_struct.posts, post_id)
    new_user_struct = %UserPost{
      user: user,
      posts: new_posts
    }
    new_user_object = new_user_struct |> make_new_user_object.()
    old_meta = user_object |> :riakc_obj.get_metadata()
    old_sec_idx = :riakc_obj.get_secondary_index(old_meta, {:binary_index, <<"post_id">>})
    new_sec_idx = List.delete(old_sec_idx, post_id)
    case new_sec_idx do
      [] -> :ok
      _ ->  new_meta = new_user_object
                       |> :riakc_obj.get_update_metadata()
                       |> :riakc_obj.set_secondary_index(
                            [{{:binary_index, <<"post_id">>}, new_sec_idx}])
            :ok = new_user_object |> :riakc_obj.update_metadata(new_meta) |> db_put.()
    end
  end

  defp remove_post_from_database(post_id, state) do
    :riakc_pb_socket.delete(state.riak_pid, state.posts, post_id)
    |> dispatch_removal_continuation(post_id, state)
  end

  defp dispatch_removal_continuation(:ok, post_id, state) do
    remove_post_from_users(post_id, state)
    remove_post_from_hashes(post_id, state)
    {:reply, :ok, state}
  end
  defp dispatch_removal_continuation(:ok, post_id, state) do
    {:reply, :error, state}
  end

end