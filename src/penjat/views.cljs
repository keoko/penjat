(ns penjat.views
  (:require [reagent.core  :as reagent :refer [atom]]
            [re-frame.core :refer [subscribe dispatch]]
            [penjat.game :refer [win-game? contains-char? max-misses]]))



(def img-dir "img")

(def theme-name "julia")

(def alphabet (map #(js/String.fromCharCode %) (range 65 91)))

(def win-img-name "win")


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
        [:b {:style {:font-size "50px"}} letters]))))


(defn missed-letters
  [misses]
  [:div (apply str (interpose ","  misses))])


(defn alphabet-bar
  [guesses misses]
  [:p.lead
   (map (fn [c] 
          [:span 
           {:style {:padding "5px"}}
           (cond 
             (contains-char? guesses c) [:b  c]
             (contains-char? misses c) [:del {:style {:display "none"}} c]
             :else [:a {:href "#"
                        :on-click #(dispatch [:key c])} c])])  
        alphabet)])


(defn gallow-image 
  [name display]
  [:img {:width "500px"
         :src (str img-dir "/" theme-name "/" name ".png")
         :style {:display display}}])


(defn gallow
  []
  (let [a (subscribe [:num-misses])]
    (fn gallow-render
      []
      [:div
       (doall 
        (for [i (range 0 (+ max-misses 2))]
          (gallow-image i (if (== @a i) "inline-block" "none"))))])))


(defn start-page
  []
  (fn start-page-render
    []
    [:div
     [alphabet-bar #{} #{}]
     [:div.input-group.input-group-lg.col-sm-offset-4.col-sm-4
      [initial-focus-wrapper
       [choose-word-input {:class "center-block form-control input-lg"
                           :placeholder "Escriu una paraula"
                           :on-save #(dispatch [:set-word %])}]]]]))

(defn play-page
  []
  (let [guesses (subscribe [:guesses])
        misses (subscribe [:misses])]
    (fn play-page-render
      []
      [:div 
       [alphabet-bar @guesses @misses]
       [guessed-letters]
       [gallow]])))


(defn end-page
  []
  (let [word    (subscribe [:word])
        guesses (subscribe [:guesses])
        misses (subscribe [:misses])]
      (fn end-page-render
        []
        [:div
         [alphabet-bar @guesses @misses]
         (if (win-game? @word @guesses)
           [:div
            [:p {:style {:font-size "50px"}} "HAS GUANYAT!!!!"]
            (gallow-image win-img-name "inline-block")]
           [:div 
            [:p {:style {:font-size "50px"}} "Has perdut. La paraula era " [:b @word]]
            [gallow]])])))


(def body-by-page {:start start-page
                   :end end-page
                   :play play-page})


(defn penjat-app
  []
  (let [current-page (subscribe [:current-page])]
    (fn []
      [:div.container-full
       [:div.row
        [:div.col-lg-12.text-center.v-center
         [:h1 "penjat"]
         [(get body-by-page @current-page)]]]])))
