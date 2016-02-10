# Penjat game done with re-frame

A [re-frame](https://github.com/Day8/re-frame) implementation of [hangman](https://en.wikipedia.org/wiki/Hangman_(game)). In catalan, it's called "penjat".


## Setup And Run

1. Install [Leiningen](http://leiningen.org/)  (plus Java).

2. Get the re-frame repo
   ```
   git clone https://github.com/Day8/re-frame.git
   ```

3. Clean build
   ```
   lein do clean, figwheel
   ```

4. Run
   You'll have to wait for step 4 to do its compile, but then:
   ```
   open http://localhost:3450
   ```


## Compile an optimized version

1. Compile
   ```
   lein do clean, with-profile prod compile
   ```

2. Open the following in your browser
   ```
   resources/public/index.html
   ```


## TODO
- display all letters
- move on focus
- images
- display properly the gallow
- greyed init gallow
- page control is not game logic
- deploy to heroku
- check schema
- re-frame middleware


## DOUBTS
- chained state reaction? one state property depending on another one? is this state?
- with-meta, component-did-mount, reagent/dom-node



## NICE TO HAVE
- warning message on repeated letter
- control allowed letters
- replace todos.css with bootstrap