(ns penjat.views
  (:require [reagent.core  :as reagent :refer [atom]]
            [re-frame.core :refer [subscribe dispatch]]
            [penjat.game :refer [win-game?]]))



(def img-dir "img")

(def theme-name "julia")


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
                      :style {:text-transform "uppercase"}
                      :value @val
                      :on-blur save
                      :on-change #(reset! val (-> % .-target .-value))
                      :on-key-down #(case (.-which %)
                                     13 (save)
                                     27 (stop)
                                     nil)})])))


(defn guessed-letters
  []
  (let [word (subscribe [:word])
        guesses (subscribe [:guesses])]
    (fn word-input-render
      []
      (let [letters (clojure.string/join " " 
                                         (map #(if (contains? @guesses %) % "_") @word))]
        [:div.new-todo letters]))))


(defn missed-letters
  [misses]
  [:div (apply str (interpose ","  misses))])


(defn gallow
  []
  (let [a (subscribe [:num-misses])]
    (fn gallow-render
      []
      [:div
       (doall 
        (for [i (range 1 11)]
          [:img {:width "500px"
                 :height "500px"
                 :src (str img-dir "/" theme-name "/" i ".png")
                 :style {:display (if (== @a i) "inline-block" "none")}}]))])))




(defn replay
  []
  (fn replay-button
    []
    [:button {:on-click #(dispatch [:initialise-db])} "tornar a jugar"]))


(defn start-page
  []
  (fn start-page-render
    []
    (dispatch [:init-event-handlers-by-page :start])
    [choose-word-input {:class "new-todo"
                        :placeholder ""
                        :on-save #(dispatch [:set-word %])}]))

(defn play-page
  []
  (let [misses (subscribe [:misses])]
    (fn play-page-render
      []
      (dispatch [:init-event-handlers-by-page :play])
      [:div 
       [guessed-letters]
       [gallow]
       [missed-letters @misses]])))


(defn end-page
  []
  (let [word    (subscribe [:word])
        guesses (subscribe [:guesses])]
      (fn end-page-render
        []
        (dispatch [:init-event-handlers-by-page :end])
        [:div 
         [:div (if (win-game? @word @guesses)
                 "HAS GUANYAT :D !!!!"
                 [:div "Has perdut :'(  --> La paraula era " [:b @word]])]
         [replay]])))

(defn start-footer
  []
  [:p "Escull una paraula"])

(defn play-footer
  []
  [:p "Adivina la paraula"])

(defn end-footer
  []
  [:p "Prem qualsevol tecla per tornar a jugar."])


(def body-by-page {:start start-page
                   :end end-page
                   :play play-page})

(def footer-by-page {:start start-footer
                     :end end-footer
                     :play play-footer})


(defn penjat-app
  []
  (let [current-page (subscribe [:current-page])]
    (fn []
      [:div
       [:section.todoapp
        [:header#header
         [:h1 "penjat"]]
        [(get body-by-page @current-page)]]
       [:footer.info
        [(get footer-by-page @current-page)]]])))
