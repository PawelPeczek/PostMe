defmodule RestApi.MixProject do
  use Mix.Project

  def project do
    [
      app: :rest_api,
      version: "0.1.0",
      build_path: "../../_build",
      #config_path: "../../config/config.exs",
      deps_path: "../../deps",
      lockfile: "../../mix.lock",
      elixir: "~> 1.6",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  def application do
    [
      extra_applications: [:logger]
    ]
  end

  defp deps do
    [
      {:library, in_umbrella: true},

      {:maru, "~> 0.13"},
      {:cowboy, "~> 2.3"},
      {:jason, "~> 1.0"}
    ]
  end
end
