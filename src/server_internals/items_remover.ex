defmodule ItemsRemover do

  require ServerState
  require UserPost
  require HashtagPost
  require Post

  def remove_post_from_database(post_id, state) do
    :riakc_pb_socket.delete(state.riak_pid, state.posts, post_id)
    |> remove_from_connected_tables(post_id, state)
  end

  defp remove_from_connected_tables(:ok, post_id, state) do
    rem_post_fr_sec_idx(post_id, state.users, &remove_from_single_user_entry/3, state)
    rem_post_fr_sec_idx(post_id, state.hashes, &remove_from_single_ht_entry/3, state)
    {:reply, :ok, state}
  end
  defp remove_from_connected_tables(:ok, post_id, state) do
    {:reply, :error, state}
  end

  defp rem_post_fr_sec_idx(post_id, table, rem_fun, state) do
    :riakc_pb_socket.get_index(
      state.riak_pid,
      {<<"indexes">>, table},
      {:binary_index, 'post_id'},
      post_id
    ) |> remove_each(post_id, rem_fun, state)
  end

  defp remove_each({:ok, {:index_results_v1, res, _, _}}, post_id, rem_fun, state) do
    res |> Enum.each(& rem_fun.(&1, post_id, state))
    {:reply, :ok, state}
  end

  defp remove_each(_, _, _, state) do
    {:reply, {:error, :unable_to_delete}, state}
  end

  defp remove_from_single_ht_entry(hash_tag, post_id, _state) do
    {ht_object, ht_struct} = prep_obj_struct_pair(_state.riak_pid, _state.hashes, hash_tag)
    new_ht_struct = ht_struct.posts |> prep_new_posts(post_id) |> make_new_ht_struct(hash_tag)
    new_ht_object = new_ht_struct |> RiakUtils.new_ht(_state)
    {old_meta, old_sec_idx, new_sec_idx} = prep_values_to_refr_sec_idx(ht_object, post_id)
    renew_item(new_sec_idx, new_ht_object, _state.riak_pid)
  end

  defp make_new_ht_struct(new_posts, hash_tag) do
    %HashtagPost{
      hash_tag: hash_tag,
      posts: new_posts
    }
  end

  defp remove_from_single_user_entry(user, post_id, _state) do
    {user_object, user_struct} = prep_obj_struct_pair(_state.riak_pid, _state.users, user)
    new_user_struct = user_struct.posts |> prep_new_posts(post_id) |> make_new_user_struct(user)
    new_user_object = new_user_struct |> RiakUtils.new_user(_state)
    {old_meta, old_sec_idx, new_sec_idx} = prep_values_to_refr_sec_idx(user_object, post_id)
    renew_item(new_sec_idx, new_user_object, _state.riak_pid)
  end

  defp make_new_user_struct(new_posts, user) do
    %UserPost{
      user: user,
      posts: new_posts
    }
  end

  defp prep_new_posts(old_posts, post_id) do
    {_, new_posts} = Map.pop(old_posts, post_id)
    new_posts
  end

  defp prep_obj_struct_pair(riak_pid, table, prim_idx) do
    object = pop_item_fr_db(riak_pid, table, prim_idx)
    struct = unwrap_struct_from_obj(object)
    {object, struct}
  end

  defp pop_item_fr_db(riak_pid, table, prim_idx) do
    {:ok, object} = :riakc_pb_socket.get(riak_pid, table, prim_idx)
    :ok = :riakc_pb_socket.delete(riak_pid, table, prim_idx)
    object
  end

  defp unwrap_struct_from_obj(object) do
    :riakc_obj.get_value(object) |> :erlang.binary_to_term()
  end


  defp prep_values_to_refr_sec_idx(object, post_id) do
    old_meta = object |> :riakc_obj.get_metadata()
    old_sec_idx = :riakc_obj.get_secondary_index(old_meta, {:binary_index, <<"post_id">>})
    new_sec_idx = List.delete(old_sec_idx, post_id)
    {old_meta, old_sec_idx, new_sec_idx}
  end

  defp renew_item([], _, _) do
    :ok
  end

  defp renew_item(new_sec_idx, new_obj, riak_pid) do
    new_meta = new_obj
               |> :riakc_obj.get_update_metadata()
               |> :riakc_obj.set_secondary_index(
                    [{{:binary_index, <<"post_id">>}, new_sec_idx}])
    :ok = new_obj |> :riakc_obj.update_metadata(new_meta) |> RiakUtils.db_put(riak_pid)
  end

end
