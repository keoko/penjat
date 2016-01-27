(ns penjat.dev
  (:require [penjat.core :as penjat]
            [figwheel.client :as fw]))

(fw/start {:on-jsload penjat/main
           :websocket-url "ws://localhost:3450/figwheel-ws"})
