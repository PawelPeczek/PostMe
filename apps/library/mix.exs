defmodule PostMeLibrary.MixProject do
  use Mix.Project

  def project do
    [
      app: :library,
      version: "0.1.0",
      elixir: "~> 1.6",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  def application do
    [
      extra_applications: [:logger],
      mod: {PostMeLibrary.Application, []}
    ]
  end

  defp deps do
    [
      {:riakc, "~> 2.5"}
    ]
  end
end
