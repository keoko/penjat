(defproject penjat "0.1.0-SNAPSHOT"

  :dependencies [[org.clojure/clojure       "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [compojure "1.4.0"]
                 [ring "1.4.0"]
                 [ring/ring-defaults "0.1.4"]
                 [reagent "0.6.0-alpha"]
                 [re-frame "0.7.0-alpha"]
                 [secretary "1.2.3"]
                 [prismatic/schema "1.0.3"]
                 [environ "1.0.0"]]

  :main ^:skip-aot penjat.server

  :clean-targets ^{:protect false} ["resources/public/js" "target"]

  :profiles {:uberjar {:main penjat.server
                       :aot :all}}

  :source-paths ["src/clj"]

  :uberjar-name "penjat.jar"

  :min-lein-version "2.0.0")
