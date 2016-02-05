(ns penjat.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]
            [penjat.game :refer [end-game?]]))


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
 :num-misses
 (fn
   [db _]
   (reaction (count (:misses @db)))))


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
