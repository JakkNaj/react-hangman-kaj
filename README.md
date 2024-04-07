# react-hangman-kaj

#### Repository for semestral project within the course 'Client applications in Javascript' on FEL CVUT
## Technologies

* React
* CSS
* HTML
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
 - Graphics - SVG / Canvas --> used svg for hangman parts
 - Media - audio / video --> used audio for music while playing
 - Forms - input types, validation --> used for account login
 - Offline application - application works offline --> done

#### CSS
 - Advances selectors - pseudo classes and combinators --> e.g. chooseData.css
 - Vendor prefixes - for compatibility --> NOT USED
 - CSS3 transformations - 2D / 3D --> used for hangman hanging animation
 - CSS3 transitions - animations --> e.g. chooseData.css
 - Media queries - app doesn't break on mobile or other devices --> used

#### Javascript
 - OOP stance - modules --> used
 - JS framework - React --> used
 - Advanced JS API - FileAPI, Geolocation, WebSockets, WebRTC, Drag & Drop, LocalStorage,... --> used localStorage, fileAPI, drag & drop
 - Functional history - history API --> used in React router
 - Control media from JS - audio, video --> used for sound effects when player wins or loses
 - JS modify svg - event, creating, editing --> used for hangman parts

### Others
 - Completion of the project
 - Estetic design