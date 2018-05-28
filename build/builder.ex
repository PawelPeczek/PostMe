defmodule Builder do
  def build_project() do
    elems_list = [
      "../src/structs/hashtag_post.ex",
      "../src/structs/post.ex",
      "../src/structs/server_state.ex",
      "../src/structs/user_post.ex",
      "../src/utils/riak_utils.ex",
      "../src/server_internals/items_getter.ex",
      "../src/server_internals/items_remover.ex",
      "../src/server_internals/posts_adder.ex",
      "../src/post_me_server.ex",
    ]
    target_dir = "../out/"
    batch_compile(elems_list, target_dir)
  end

  def batch_compile([], _) do
    :ok
  end
  def batch_compile([head | tail], dest) do
    IEx.Helpers.c(head, dest)
    batch_compile(tail, dest)
  end

end
  Builder.build_project()
