defmodule ItemsGetter do


  def get_user_posts(user, state) do
    :riakc_pb_socket.get(state.riak_pid, state.users, user)
    |> dispatch_get_record_response(state)
  end

  def get_hashtag_posts(hash_tag, state) do
    :riakc_pb_socket.get(state.riak_pid, state.hashes, hash_tag)
    |> dispatch_get_record_response(state)
  end

  def get_hashtag_list(state) do
    :riakc_pb_socket.list_keys(state.riak_pid, state.hashes)
    |> dispatch_get_list_response(state)
  end

  def get_user_list(state) do
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

end
