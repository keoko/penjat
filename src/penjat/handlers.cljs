(ns penjat.handlers
  (:require
    [penjat.db    :refer [default-value schema]]
    [re-frame.core :refer [register-handler path trim-v after]]
    [schema.core   :as s]))


(defn contains-char? [s c]
  (some #(= c %) s))

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
    default-value))


(register-handler
 :save-word
 app-middleware
 (fn [app-state [_ text]]
   (merge app-state {:word text
                     :state :play})))


(register-handler
  :key       
  app-middleware
  (fn
    [db [_ key]]
    (let [word (:word db)]
      (if (not (clojure.string/blank? key))
        (let [letter (.charAt key 0)
              guesses? (contains-char? word letter)]
          (merge db {:key ""}
                 (if guesses? 
                   {:guesses (into #{} (conj (:guesses db) letter))}
                   {:misses (conj (:misses db) letter)})))
        (assoc db :key "")))))
