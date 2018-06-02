defmodule PostMe.MixProject do
    use Mix.Project
  
    def project do
      [
        app: :post_me,
        version: "1.0.0",
        deps: deps()
      ]
    end

    defp deps do
        [
            {:riakc, "~> 2.5"}
        ]
      end
  end