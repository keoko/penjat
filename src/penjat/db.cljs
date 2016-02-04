(ns penjat.db
  (:require [cljs.reader]
            [schema.core  :as s :include-macros true]))


(def schema  {:word s/Any
              :key s/Any
              (s/optional-key :guesses) s/Any
              (s/optional-key :misses)  s/Any})

(def default-value
  {
   :word ""
   :key ""
   :guesses #{}
   :misses #{}})
