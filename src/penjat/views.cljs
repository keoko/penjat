(ns penjat.views
  (:require [reagent.core  :as reagent :refer [atom]]
            [re-frame.core :refer [subscribe dispatch]]
            [penjat.subs :refer [win-game?]]))


(defn todo-input [{:keys [title on-save on-stop]}]
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

(def todo-edit (with-meta todo-input
                          {:component-did-mount #(.focus (reagent/dom-node %))}))

(defn stats-footer
  []
  (let [footer-stats (subscribe [:footer-stats])]
    (fn []
      (let [[active done filter] @footer-stats
            props-for (fn [filter-kw txt]
                        [:a {:class (if (= filter-kw filter) "selected")
                             :href (str "#/" (name filter-kw))} txt])]
        [:footer.footer
         [:div
          [:span.todo-count
           [:strong active] " " (case active 1 "item" "items") " left"]
          [:ul.filters
           [:li (props-for :all "All")]
           [:li (props-for :active "Active")]
           [:li (props-for :done "Completed")]]
          (when (pos? done)
            [:button.clear-completed {:on-click #(dispatch [:clear-completed])}
             "Clear completed"])]]))))

(defn todo-item
  []
  (let [editing (atom false)]
    (fn [{:keys [id done title]}]
      [:li {:class (str (if done "completed ")
                        (if @editing "editing"))}
       [:div.view
        [:input.toggle {:type "checkbox"
                        :checked done
                        :on-change #(dispatch [:toggle-done id])}]
        [:label {:on-double-click #(reset! editing true)} title]
        [:button.destroy {:on-click #(dispatch [:delete-todo id])}]]
       (when @editing
         [todo-edit {:class "edit"
                     :title title
                     :on-save #(dispatch [:save id %])
                     :on-stop #(reset! editing false)}])])))

(defn todo-list
  [visible-todos]
  [:ul.todo-list
   (for [todo  @visible-todos]
     ^{:key (:id todo)} [todo-item todo])])


(defn word-input
  []
  (let [word (subscribe [:word])
        guesses (subscribe [:guesses])]
    (fn word-input-render
      []
      (let [letters (clojure.string/join " " 
                                         (map #(if (contains? @guesses %) % "_") @word))]
        (.log js/console (str "words:" @guesses letters @word))
        [:div
         (str "guesses: " letters)]))))

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

(defn attempts
  [misses]
  (let [attempts (subscribe [:attempts])]
    (fn attempts-render
      []
      [:div (str "attempts:" @attempts)])))

(defn miss-letters-component
  [misses]
  [:div (str "misses:" (apply str (interpose ","  misses)))])

(defn replay
  []
  (fn replay-button
    []
    [:button {:on-click #(dispatch [:initialise-db])} "replay"]))


(defn end-page
  [word guesses misses]
  (fn end-page-render
    []
    [:div 
     [:div (if (win-game? word guesses)
             "YOU WIN!!!!"
             [:div "Guesser loses - the answer was " [:b word]])]
     [replay]]))


(defn penjat-app
  []
  (let [word            (subscribe [:word])
        guesses         (subscribe [:guesses])
        state           (subscribe [:state])
        misses          (subscribe [:misses])]
    (fn []
      [:div
       [:section.todoapp
        [:header#header
         [:h1 "penjat"]
         (case @state
           :play [:div 
                  [key-input]
                  [word-input]
                  [miss-letters-component @misses]]
           :end [end-page @word @guesses]
           [todo-input {:class "new-todo"
                        :placeholder "Escull la paraula"
                        :on-save #(dispatch [:save-word %])}])]]])))
