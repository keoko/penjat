(ns penjat.core
  (:require-macros [secretary.core :refer [defroute]])
  (:require [goog.events :as events]
            [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [dispatch dispatch-sync]]
            [secretary.core :as secretary]
            [penjat.handlers]
            [penjat.subs]
            [penjat.views])
  (:import [goog History]
           [goog.history EventType]))


(enable-console-print!)


(defn ^:export main
  []
  (dispatch-sync [:initialise-db])
  (reagent/render [penjat.views/penjat-app]
                  (.getElementById js/document "app")))
