(ns penjat.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]))

(def max-attempts 3)



;; -- Helpers -----------------------------------------------------------------


(defn filter-fn-for
      [showing-kw]
      (case showing-kw
            :active (complement :done)
            :done   :done
            :all    identity))


(defn completed-count
      "return the count of todos for which :done is true"
      [todos]
      (count (filter :done (vals todos))))


;; -- Subscription handlers and registration  ---------------------------------

(register-sub
  :todos                ;; usage:  (subscribe [:todos])
  (fn [db _]
      (reaction (vals (:todos @db)))))

(register-sub
 :word
 (fn [db _]
   (reaction (:word @db))))

(register-sub
 :guessed-letters
 (fn
   [db _]
   (reaction (:guessed-letters @db))))

(register-sub
 :key
 (fn
   [db _]
   (reaction (:key @db))))


(register-sub
 :attempts
 (fn
   [db _]
   (let [failed-letters (reaction (:failed-letters @db))]
     (reaction (count @failed-letters)))))


(defn win-game?
  [word guessed-letters]
  (= (set word) (set guessed-letters)))

(defn lose-game?
  [failed-letters]
  (<= max-attempts (count failed-letters)))

(defn end-game?
  [word guessed-letters failed-letters]
  (or (win-game? word guessed-letters)
      (lose-game? failed-letters)))


(register-sub
 :state
 (fn
   [db _]
   (let [word (reaction (:word @db))
         failed-letters (reaction (:failed-letters @db))
         guessed-letters (reaction (:guessed-letters @db))]
     (reaction 
      (if (not (seq @word))
        :start
        (if (end-game? @word @guessed-letters @failed-letters)
          :end 
          :play))))))










(register-sub
  :visible-todos
  (fn [db _]
      (reaction (let [filter-fn (filter-fn-for (:showing @db))
                      todos     (vals (:todos @db))]
                     (filter filter-fn todos)))))

(register-sub
  :completed-count
  (fn [db _]
      (reaction (completed-count (:todos @db)))))

(register-sub
  :footer-stats
  (fn [db _]
      (reaction
        (let [todos (:todos @db)
              completed-count (completed-count todos)
              active-count    (- (count todos) completed-count)
              showing         (:showing @db)]
             [active-count completed-count showing]))))  ;; tuple
