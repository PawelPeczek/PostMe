defmodule RestApi do
  use Maru.Router

  before do
    plug Plug.Logger
  end

  plug Plug.Parsers,
    pass: ["*/*"],
    json_decoder: Jason,
    parsers: [:urlencoded, :json, :multipart]

  mount Rest.Router

  rescue_from [MatchError, RuntimeError], with: :custom_error

  rescue_from :all, as: e do
    conn
    |> put_status(Plug.Exception.status(e))
    |> text("Server Error")
  end

  defp custom_error(conn, exception) do
    conn
    |> put_status(500)
    |> text(exception.message)
  end

end
