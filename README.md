# TodoMVC done with re-frame

A [re-frame](https://github.com/Day8/re-frame) implementation of [hangman](http://todomvc.com/) game.


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
- fix end game? function
- handle key stroke
- layout with bootstrap
- check schema
- re-frame middleware
- clean re-frame example code
- commit changes to github
- deploy to heroku


