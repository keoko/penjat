(ns penjat.handlers
  (:require
    [penjat.db    :refer [schema]]
    [penjat.game  :refer [default-game-state set-word guess-letter]]
    [re-frame.core :refer [register-handler path trim-v after]]
    [schema.core   :as s]))


(defn check-and-throw
  "throw an exception if db doesn't match the schema."
  [a-schema db]
  (if-let [problems  (s/check a-schema db)]
    (throw (js/Error. (str "schema check failed: " problems)))))

(def check-schema-mw (after (partial check-and-throw schema)))

(def app-middleware [check-schema-mw])


(register-handler
  :initialise-db
  check-schema-mw
  (fn [_ _]
    default-game-state))


(register-handler
 :save-word
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
