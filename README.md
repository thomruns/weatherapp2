# Weather App 2
This weather app uses the Weather Underground API for functionality, Bootstrap and the Cerulean Bootswatch theme for CSS styling. With the exception of a single line of jQuery, the app is written entirely in vanilla JavaScript ES6.
* The app controller is in app.js
* UI functionality is in ui.js
* The interface to the weather API is weather.js
* The local storage functionality is in storage.js
* The UI is in the index.html file.

User can click a UI button to access a modal, in which the desired city and state can be entered. Various pieces of weather data for the selected location is painted to the UI, and that information persists in local storage until a new city/state combination is chosen by the user.