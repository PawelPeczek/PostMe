defmodule RestApi do
  use Maru.Router
  use MaruSwagger

  before do
    plug Plug.Logger
    plug Corsica, max_age: 600, origins: "*"
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

  swagger at:         "/swagger",      # (required) the mount point for the URL
          pretty:     true,            # (optional) should JSON be pretty-printed?
          except:     [:prod],         # (optional) the environments swagger NOT works
          force_json: true             # (optional) force JSON for all params instead of formData

end
