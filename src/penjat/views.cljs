(ns penjat.views
  (:require [reagent.core  :as reagent :refer [atom]]
            [re-frame.core :refer [subscribe dispatch]]
            [penjat.game :refer [win-game? contains-char? max-misses]]))



(def img-dir "img")

(def theme-name "julia")

(def alphabet (map #(js/String.fromCharCode %) (range 65 91)))


(def initial-focus-wrapper 
  (with-meta identity
    {:component-did-mount #(.focus (reagent/dom-node %))}))

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


(defn alphabet-bar
  [guesses misses]
  [:div.todo
   (map (fn [c] 
          (cond 
            (contains-char? guesses c) [:b  c]
            (contains-char? misses c) [:del c]
            :else [:a {:href "#"
                       :on-click #(dispatch [:key c])} c]))  
        alphabet)])


(defn gallow
  []
  (let [a (subscribe [:num-misses])]
    (fn gallow-render
      []
      [:div
       (doall 
        (for [i (range 0 (+ max-misses 2))]
          [:img {:width "500px"
                 :src (str img-dir "/" theme-name "/" i ".png")
                 :style {:display (if (== @a i) "inline-block" "none")}}]))])))


(defn start-page
  []
  (fn start-page-render
    []
    [initial-focus-wrapper
     [choose-word-input {:class "new-todo"
                         :placeholder "Escull una paraula"
                         :on-save #(dispatch [:set-word %])}]]))

(defn play-page
  []
  (let [guesses (subscribe [:guesses])
        misses (subscribe [:misses])]
    (fn play-page-render
      []
      [:div 
       [guessed-letters]
       [alphabet-bar @guesses @misses]
       [gallow]])))


(defn end-page
  []
  (let [word    (subscribe [:word])
        guesses (subscribe [:guesses])]
      (fn end-page-render
        []
        (let [text (if (win-game? @word @guesses)
                 "HAS GUANYAT :D !!!!"
                 [:div "Has perdut :'(  --> La paraula era " [:b @word]])]
          [:div
           [:div.new-todo text]
           [gallow]]))))


(def body-by-page {:start start-page
                   :end end-page
                   :play play-page})


(defn penjat-app
  []
  (let [current-page (subscribe [:current-page])]
    (fn []
      [:div
       [:section.todoapp
        [:header#header
         [:h1 "penjat"]]
        [(get body-by-page @current-page)]]])))
