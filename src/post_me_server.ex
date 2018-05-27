defmodule PostMeServer do

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
    PostsAdder.add_post(user, hash_tags, content, state)
  end
  def handle_call({:add_post, user, hash_tag, content}, _from, state) do
    PostsAdder.add_post(user, [hash_tag], content, state)
  end
  def handle_call({:get_user_posts, user}, _from, state) do
    ItemsGetter.get_user_posts(user, state)
  end
  def handle_call({:get_hashtag_posts, hash_tag}, _from, state) do
    ItemsGetter.get_hashtag_posts(hash_tag, state)
  end
  def handle_call({:get_hashtag_list}, _from, state) do
    ItemsGetter.get_hashtag_list(state)
  end
  def handle_call({:get_user_list}, _from, state) do
    ItemsGetter.get_user_list(state)
  end
  def handle_call({:delete_post, post_id}, _from, state) do
    ItemsRemover.remove_post_from_database(post_id, state)
  end
  def handle_call(:stop, _from, state) do
    {:stop, :normal, state}
  end

  def terminate(reason, state) do
    :riakc_pb_socket.stop(state.riak_pid)
    IO.puts "PostMeServer has terminated.\n"
  end

  defp handle_init({:ok, srv_pid}) do
    state = %ServerState{
      users: <<"Users">>,
      posts: <<"Posts">>,
      hashes: <<"Hashes">>,
      riak_pid: srv_pid
    }
    {:ok, state}
  end

  #  Private functions

  defp handle_init({:error, _}) do
    {:stop, :cannot_connect_to_database}
  end

end