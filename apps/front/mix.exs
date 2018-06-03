defmodule Front.MixProject do
  use Mix.Project

  def project do
    [
      app: :front,
      version: "0.1.0",
      build_path: "../../_build",
      #config_path: "../../config/config.exs",
      deps_path: "../../deps",
      lockfile: "../../mix.lock",
      elixir: "~> 1.6",
      compilers: Mix.compilers ++ [:elixir_script],
      elixir_script: [
        input: [PostMe.Init],
        # Output path. Either a path to a js file or a directory
        output: "../rest_api/assets/"
      ],
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  def application do
    [
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:elixir_script, "~> 0.32.1"}
    ]
  end
end
