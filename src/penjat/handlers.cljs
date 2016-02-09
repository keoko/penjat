(ns penjat.handlers
  (:require
    [penjat.db    :refer [schema]]
    [penjat.game  :refer [default-game-state set-word guess-letter get-current-page]]
    [re-frame.core :refer [register-handler path trim-v after dispatch]]
    [schema.core   :as s]))


(defn check-and-throw
  "throw an exception if db doesn't match the schema."
  [a-schema db]
  (if-let [problems  (s/check a-schema db)]
    (throw (js/Error. (str "schema check failed: " problems)))))

(def check-schema-mw (after (partial check-and-throw schema)))

(def app-middleware [check-schema-mw])


(defn keydown
  [e]
  (dispatch [:keypressed e]))

(defn keydown-in-start-page
  [key])

(defn keydown-in-play-page
  [key]
  (dispatch [:key key]))

(defn keydown-in-end-page
  [key]
  (dispatch [:initialise-db]))


(def keydown-event-by-page {:start keydown-in-start-page
                            :play keydown-in-play-page
                            :end keydown-in-end-page})

(register-handler
 :keypressed
 (fn [db [_ e page]]
   (let [key (js/String.fromCharCode (.-keyCode e))
         current-page (get-current-page db)]
     (.log js/console (str "current-page:" current-page db))
     ((get keydown-event-by-page current-page) key)
     db)))


(register-handler
  :initialise-db
  check-schema-mw
  (fn [_ _]
    (set! (.-onkeydown js/document) keydown)
    default-game-state))


(register-handler
 :set-word
 app-middleware
 (fn [db [_ text]]
   (set-word db text)))


(register-handler
 :key       
 app-middleware
 (fn
   [db [_ key]]
   (let [letter (.charAt key 0)]
     (when (not (clojure.string/blank? key))
       (guess-letter db key)))))
