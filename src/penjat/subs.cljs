(ns penjat.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]))

(def max-attempts 5)


(register-sub
 :word
 (fn [db _]
   (reaction (:word @db))))

(register-sub
 :guesses
 (fn
   [db _]
   (reaction (:guesses @db))))

(register-sub
 :misses
 (fn
   [db _]
   (reaction (:misses @db))))

(register-sub
 :key
 (fn
   [db _]
   (reaction (:key @db))))


(defn win-game?
  [word guesses]
  (= (set word) (set guesses)))

(defn lose-game?
  [misses]
  (<= max-attempts (count misses)))

(defn end-game?
  [word guesses misses]
  (or (win-game? word guesses)
      (lose-game? misses)))

(register-sub
 :current-page
 (fn
   [db _]
   (let [word (reaction (:word @db))
         misses (reaction (:misses @db))
         guesses (reaction (:guesses @db))]
     (reaction 
      (if (not (seq @word))
        :start
        (if (end-game? @word @guesses @misses)
          :end 
          :play))))))
