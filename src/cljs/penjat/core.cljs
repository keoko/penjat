(ns penjat.core
  (:require-macros [reagent.ratom :refer [reaction]])  
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [register-handler
                                   path
                                   register-sub
                                   dispatch
                                   dispatch-sync
                                   subscribe]]
            [clojure.string :refer [join
                                    blank?]]))

;; trigger a dispatch every second
(defonce time-updater (js/setInterval
                        #(dispatch [:timer (js/Date.)]) 1000))

(def img-dir "img")

(def theme-name "julia")

(def max-attempts 10)

(def initial-state
  {:word "portatil"
   :key ""
   :guessed-letters #{}
   :failed-letters #{}})



;; Helper functions

(defn contains-char? [s c]
  (some #(= c %) s))

;; -- Event Handlers ----------------------------------------------------------


(register-handler                 ;; setup initial state
  :initialize                     ;; usage:  (submit [:initialize])
  (fn 
    [db _]
    (merge db initial-state)))    ;; what it returns becomes the new state


(register-handler
  :time-color                     ;; usage:  (submit [:time-color 34562])
  (path [:time-color])            ;; this is middleware
  (fn
    [time-color [_ value]]        ;; path middleware adjusts the first parameter
    value))


(register-handler
  :timer
  (fn
    ;; the first item in the second argument is :timer the second is the 
    ;; new value
    [db [_ value]]
    (assoc db :timer value)))    ;; return the new version of db


(register-handler
  :key       
  (fn
    [db [_ key]]
    (let [word (:word db)]
        (if (not (blank? key))
          (let [letter (.charAt key 0)
                db' (assoc db :key letter)]
            (if  (contains-char? word letter)
              (update-in db' [:guessed-letters] #(conj % letter))
              (update-in db' [:failed-letters] #(conj % letter))))
          (assoc db :key "")))))



;; -- Subscription Handlers ---------------------------------------------------


(register-sub
  :timer
  (fn 
    [db _]                       ;; db is the app-db atom
    (reaction (:timer @db))))    ;; wrap the compitation in a reaction


(register-sub
  :time-color
  (fn 
    [db _]
    (reaction (:time-color @db))))


(register-sub
 :word
 (fn
   [db _]
   (reaction (:word @db))))


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


(register-sub
 :guessed-letters
 (fn
   [db _]
   (reaction (:guessed-letters @db))))


;; -- View Components ---------------------------------------------------------

(defn clock
  []
  (let [time-color (subscribe [:time-color])
        timer (subscribe [:timer])]

    (fn clock-render
        []
        (let [time-str (-> @timer
                           .toTimeString
                           (clojure.string/split " ")
                           first)
              style {:style {:color @time-color}}]
             [:div.example-clock style time-str]))))


(defn color-input
  []
  (let [time-color (subscribe [:time-color])]

    (fn color-input-render
        []
        [:div.color-input
         "Time color: "
         [:input {:type "text"
                  :value @time-color
                  :on-change #(dispatch
                               [:key (-> % .-target .-value)])}]])))

(defn key-input
  []
  (let [key (subscribe [:key])]
    (fn key-input-handler
      []
      [:div
       "key: "
       [:input {:type "text"
                :value @key
                :on-change #(dispatch 
                             [:key (-> % .-target .-value)])}]])))

(defn word-input
  []
  (let [w (subscribe [:word])
        guessed (subscribe [:guessed-letters])]
    (fn word-input-render
      []
      (let [letters (join " " (map #(if (contains? @guessed %) % "_") @w))]
        [:div
         (str "word: " letters)]))))


(defn attempts
  []
  (let [a (subscribe [:attempts])]
    (fn attempts-render
      []
      [:div
       (doall 
        (for [i (range 1 11)]
          [:img {:width "500px"
                 :height "500px"
                 :src (str img-dir "/" theme-name "/" i ".png")
                 :style {:display (if (== @a i) "inline-block" "none")}}]))])))


(defn home-page
  []
  [:div
   [word-input]
   [key-input]
   [attempts]])


;; -- Entry Point -------------------------------------------------------------


(defn ^:export mount-root
  []
  (dispatch-sync [:initialize])
  (reagent/render [home-page]
                  (js/document.getElementById "app")))


(defn init!
  []
  (mount-root))
