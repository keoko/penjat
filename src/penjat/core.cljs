(ns penjat.core
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [dispatch dispatch-sync]]
            [penjat.handlers]
            [penjat.subs]
            [penjat.views]
            [penjat.game]))


(enable-console-print!)


(defn ^:export main
  []
  (dispatch-sync [:initialise-db])
  (reagent/render [penjat.views/penjat-app]
                  (.getElementById js/document "app")))
