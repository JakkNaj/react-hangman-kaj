# react-hangman-kaj

#### Repository for semestral project within the course 'Client applications in Javascript' on FEL CVUT

## Technologies

* React.js
* CSS
* HTML

## Goal of the semestral work
Goal of the semestral work is to learn intermediate Javascript a CSS. I want to utilize the new things i learn in the game Hangman.
The game should be a typical Hangaman, where player is allowed 6 incorrect guesses before he loses and should be playable online (fetch words from english dictionary) and offline (only on imported data locally).
The game should support keeping score for each local player and display the highest scores. Game without sound isn't really game, so the game should contain
sound effects for winning and losing and furthermore, the game should contain music available for player while playing. All of these sound effects 
should be mutable if the player wants to play in silence. The game should be responsive, should work on all devices and be visually appealing.

## Description

The application is a pretty well-known game called Hangman. It is a word guessing game, where the player guesses letters
and if the guess was right, the correct letters are exposed, but if the guess was wrong, the part of hangman is uncovered
and after 6 incorrect guesses the player loses and the word gets uncovered. There are some other features like playing
under a certain "account" (name) and keep score in local storage, then the 3 highest local scores are shown to motivate
other players to up their scores, but since it is saved only locally, the account part is based on "trust" system.
The player can just type any name and log in as the following user. These features were added with aim to meet all requirements
given in the course. One last feature is the history of Hangman game, where player can read about it's origin.

## Requirements

#### HTML5
 - Validation - valid through W3C validator (https://validator.w3.org)
 - Semantic elements (section, article, header, footer, nav...) --> used
 - Graphics - SVG / Canvas --> used svg for displaying the hangman parts and manipulated the path in JS
 - Media - audio / video --> used audio tag to play music for player while playing, but only if the sound in the game is not muted
 - Forms - input types, validation --> used for account login. The form is reacting to input and displayes error messages.
   -> for example the name input cannot be empty and if the player chose to play offline, he cannot to do so, until the data to play on are imported successfully.
   -> another example is that if the player don't have connection to the internet, the game will not let him play the online version with english dictionary 
 - Offline application - application works offline --> done, the game can be offline with own imported data, or if the player already plays on online data and loses internet connection
    during that time, those data are cached and until the player cycles the whole set of words, he can play offline on online data. After that if the player still don't have connection, he can play only on imported data.
    the game will notify the player to switch to own data in order to continue playing the game

#### CSS
 - Advances selectors - pseudo classes and combinators --> e.g. chooseData.css
 - Vendor prefixes - for compatibility --> NOT USED
 - CSS3 transformations - 2D / 3D --> used for hangman hanging animation. After the player loses, the hangman starts swinging from side to side. Another example of
    of transformation is in the import data button in the login form.
 - CSS3 transitions - animations --> e.g. chooseData.css
 - Media queries - app doesn't break on mobile or other devices --> done, the game is responsive and works on all devices

#### Javascript
 - OOP stance - modules --> used
 - JS framework - React --> used
 - Advanced JS API - FileAPI, Geolocation, WebSockets, WebRTC, Drag & Drop, LocalStorage,... --> used localStorage, fileAPI, drag & drop.
    -> localStorage: used for saving the player's score and name
    -> fileAPI: used for importing data to play on
    -> drag & drop: used for importing data to play on (better user experience)
 - Functional history - history API --> used in React router
 - Control media from JS - audio, video --> used for sound effects when player wins or loses
 - JS modify svg - event, creating, editing --> used for hangman parts, the svg path is modified based on the number of incorrect guesses

### Others
 - Completion of the project
 - Estetic design