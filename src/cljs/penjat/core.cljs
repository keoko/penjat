(ns penjat.core
  (:require-macros [reagent.ratom :refer [reaction]])  
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [re-frame.core :refer [register-handler
                                   path
                                   register-sub
                                   dispatch
                                   dispatch-sync
                                   subscribe]]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [clojure.string :refer [join
                                    blank?]])
  (:import goog.History))

;; trigger a dispatch every second
(defonce time-updater (js/setInterval
                        #(dispatch [:timer (js/Date.)]) 1000))



(def img-dir "img")

(def theme-name "julia")

(def max-attempts 10)

(def game-states [:init :setup :run :pause :hang :win])

(def initial-state
  {:word "funoll"
   :key ""
   :state :init
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
    (.log js/console "init...")
    (merge db initial-state)))    ;; what it returns becomes the new state

(register-handler
 :start-game
 (fn
   [db _]
   (.log js/console "starting game...")
   (dispatch [:initialize])
   (secretary/dispatch! "/game")
   (assoc db :state :run)))


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

(register-sub
 :failed-letters
 (fn
   [db _]
   (reaction (:failed-letters @db))))


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


(defn game-win?
  []
  (let [guessed (subscribe [:guessed-letters])
        word (subscribe [:word])]
    (fn handle-win-game
      []
      (let [num-guessed (count @guessed)
            max-to-guess (count (set @word))] 
          (.log js/console "game-win?????")
        (when (>= num-guessed max-to-guess)
          (secretary/dispatch! "/saved"))
        [:div ""]))))


(defn game-over?
  []
  (let [failed (subscribe [:failed-letters])]
    (fn handle-game-over
      []
      (let [num-failed (count @failed)]
        (.log js/console "game-over?")
        (when (>= num-failed max-attempts)
          (secretary/dispatch! "/hanged"))
        [:div ""]))))





(defn home-page
  []
  [:div
   [word-input]
   [key-input]
   [attempts]
   [game-win?]
   [game-over?]])




(defn page-template
  [page]
  [:div {:style {:background-image (str  "url(/img/" theme-name "/" page ".png)")
                 :background-position "right bottom, left top;"
                 :background-repeat "no-repeat, repeat"
                 :padding "15px"
                 :width "100%"
                 :height "100%"
                 :position "absolute"
                 :left 0
                 :top 0}}
   [:button {:on-click #(dispatch [:start-game])} "play"]]
)

(defn start-page
  []
  (page-template "start"))

(defn saved-page
  []
  (page-template "saved"))

(defn hanged-page
  []
  (page-template "hanged"))


(defn current-page []
  [(session/get :current-page) (session/get :params)])


;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" {:as params}
  (session/put! :current-page #'start-page)
  (session/put! :params params)
  #_(dispatch [:load-start-page]))

(secretary/defroute "/game" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/saved" {:as params}
  (session/put! :current-page #'saved-page)
  (session/put! :params params)
  #_(dispatch [:load-start-page]))

(secretary/defroute "/hanged" {:as params}
  (session/put! :current-page #'hanged-page)
  (session/put! :params params)
  #_(dispatch [:load-start-page]))


(defn redirect-to
  [resource]
  (secretary/dispatch! resource)
  (.setToken (History.) resource))

(secretary/defroute "*" []
  (redirect-to "/"))


;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))


;; -- Entry Point -------------------------------------------------------------


(defn ^:export mount-root
  []
  (dispatch-sync [:initialize])
  #_(reagent/render [home-page]
                  (js/document.getElementById "app"))
  (reagent/render-component [current-page] (.getElementById js/document "app")))


(defn init!
  []
  (hook-browser-navigation!)
  (mount-root))
