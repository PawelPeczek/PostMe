defmodule PostMeLibrary.Application do
  use Application

  def start(_type, _args) do
    children = [
      {PostMeServer, []}
    ]

    opts = [strategy: :one_for_one, name: PostMeLibrary.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
