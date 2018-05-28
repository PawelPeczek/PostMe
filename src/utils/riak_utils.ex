defmodule RiakUtils do

  require HashtagPost
  require UserPost

  def db_put(obj, riak_pid) do
    :riakc_pb_socket.put(riak_pid, obj)
  end

  def new_ht(struct, state) do
    :riakc_obj.new(state.hashes, struct.hash_tag, struct)
  end

  def new_user(struct, state) do
    :riakc_obj.new(state.users, struct.user, struct)
  end

  def new_post_with_unknown_key(struct, state) do
    :riakc_obj.new(state.posts, :undefined, struct)
  end

end
