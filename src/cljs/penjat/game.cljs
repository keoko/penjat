(ns penjat.game)


(def max-misses 11)

(def default-game-state
  {
   :word ""
   :guesses #{}
   :misses #{}})


(defn set-word
  [db text]
  (assoc db :word (clojure.string/upper-case text)))

(defn contains-char? [s c]
  (some #(= c %) s))

(defn guess-letter
  [db letter]
  (let [guessed? (contains-char? (:word db) letter)]
    (if guessed? 
      (update-in db [:guesses] #(conj % letter))
      (update-in db [:misses]  #(conj % letter)))))


(defn win-game?
  [word guesses]
  (= (set word) (set guesses)))

(defn lose-game?
  [misses]
  (<= max-misses (count misses)))

(defn end-game?
  [word guesses misses]
  (or (win-game? word guesses)
      (lose-game? misses)))
