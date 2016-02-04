(ns penjat.views
  (:require [reagent.core  :as reagent :refer [atom]]
            [re-frame.core :refer [subscribe dispatch]]
            [penjat.subs :refer [win-game?]]))


(defn choose-word-input [{:keys [title on-save on-stop]}]
  (let [val (atom title)
        stop #(do (reset! val "")
                  (if on-stop (on-stop)))
        save #(let [v (-> @val str clojure.string/trim)]
               (if-not (empty? v) (on-save v))
               (stop))]
    (fn [props]
      [:input (merge props
                     {:type "text"
                      :value @val
                      :on-blur save
                      :on-change #(reset! val (-> % .-target .-value))
                      :on-key-down #(case (.-which %)
                                     13 (save)
                                     27 (stop)
                                     nil)})])))


(defn key-input
  []
  (let [val (atom "")]
    (fn key-input-handler
      []
      [:div
       "key: "
       [:input {:type "text"
                :value @val
                :on-change #(dispatch 
                             [:key (-> % .-target .-value)])}]])))


(defn guessed-letters
  []
  (let [word (subscribe [:word])
        guesses (subscribe [:guesses])]
    (fn word-input-render
      []
      (let [letters (clojure.string/join " " 
                                         (map #(if (contains? @guesses %) % "_") @word))]
        [:div
         (str "guesses: " letters)]))))


(defn missed-letters
  [misses]
  [:div (str "misses:" (apply str (interpose ","  misses)))])


(defn replay
  []
  (fn replay-button
    []
    [:button {:on-click #(dispatch [:initialise-db])} "tornar a jugar"]))


(defn start-page
  []
  (fn start-page-render
    []
    [choose-word-input {:class "new-todo"
                        :placeholder "Escull la paraula"
                        :on-save #(dispatch [:save-word %])}]))

(defn play-page
  []
  (let [misses (subscribe [:misses])]
    (fn play-page-render
      []
      [:div 
       [key-input]
       [guessed-letters]
       [missed-letters @misses]])))


(defn end-page
  []
  (let [word    (subscribe [:word])
        guesses (subscribe [:guesses])]
      (fn end-page-render
        []
        [:div 
         [:div (if (win-game? @word @guesses)
                 "HAS GUANYAT :D !!!!"
                 [:div "Has perdut :'(  --> La paraula era " [:b @word]])]
         [replay]])))


(defn penjat-app
  []
  (let [current-page (subscribe [:current-page])]
    (fn []
      [:div
       [:section.todoapp
        [:header#header
         [:h1 "penjat"]
         (case @current-page
           :play [play-page]
           :end [end-page]
           [start-page])]]])))
