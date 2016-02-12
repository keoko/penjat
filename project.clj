(defproject penjat "0.1.0"
  :dependencies [[org.clojure/clojure       "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [reagent "0.6.0-alpha"]
                 [re-frame "0.7.0-alpha"]
                 [secretary "1.2.3"]
                 [prismatic/schema "1.0.3"]]

  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-figwheel "0.5.0-2"]
            [lein-heroku "0.5.3"]]

  
  :hooks [leiningen.cljsbuild]

  :profiles {:dev {:cljsbuild
                   {:builds {:client {:source-paths ["devsrc"]
                                      :compiler     {:main penjat.dev
                                                     :asset-path "js"
                                                     :optimizations :none
                                                     :source-map true
                                                     :source-map-timestamp true}}}}}

             :prod {:cljsbuild
                    {:builds {:client {:compiler    {:optimizations :advanced
                                                     :elide-asserts true
                                                     :pretty-print false}}}}}}

  :figwheel {:server-port 3450
             :repl        true}

  :clean-targets ^{:protect false} ["resources/public/js" "target"]

  :cljsbuild {:builds {:client {:source-paths ["src"]
                                :compiler     {:output-dir "resources/public/js"
                                               :output-to  "resources/public/js/client.js"}}}}

  :min-lein-version "2.5.0"
  :heroku {:app-name "penjat"}
  :uberjar-name "penjat.jar"
  :aliases {"package"
            ["with-profile" "prod" "do"
             "clean" ["cljsbuild" "once"]]})
