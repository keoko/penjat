# Penjat game done with re-frame

A [re-frame](https://github.com/Day8/re-frame) implementation of [hangman](https://en.wikipedia.org/wiki/Hangman_(game)).


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
- handle key stroke
- layout with bootstrap
- check schema
- re-frame middleware
- clean re-frame example code
- refactor code with domain language
- local storage
- do we split the game logic into a game file?
- chained state reaction? one state property depending on another one? is this state?
- deploy to heroku


## NICE TO HAVE
- warning message on repeated letter
- control allowed letters

