(ns penjat.views
  (:require [reagent.core  :as reagent :refer [atom]]
            [re-frame.core :refer [subscribe dispatch]]))


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

(defn penjat-app
  []
  (let [word            (subscribe [:word])]
    (fn []
      [:div
       [:section.todoapp
        [:header#header
         [:h1 "penjat"]
         (if (empty? @word)
           [todo-input {:class "new-todo"
                        :placeholder "Escull la paraula"
                        :on-save #(dispatch [:save-word %])}]
           [:div (str "word:" @word)])]]])))