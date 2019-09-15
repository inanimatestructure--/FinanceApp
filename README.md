# StockFinanceApp

## Main Idea
This project is designed by yours truly (:^)) to grab stock data from Alpha Vantage and insert it into an electron app. Ideally I'd like to have Google's Tensorflow API be able to predict stock prices using a machine learning algorithm. Now which one we should use and why might take some research but as of right now I'd like to have a fully functioning electron wrapper for the AV API. 

## Tasks to Complete (So Far)

#### 1. Edit the common.js file to get the alpha vantage data from the respective fields on the popup pages.

~~2. Setup plotly so that it creates tables on the main page using the open or close values in the retrieved API data.~~

#### 3. If there's any other way this app could be more functional/user friendly (IE placements of html or jquery/js animations) I'd love to hear some ideas. I would like to just get it functioning at this point but any kind of aesthetic change is welcome.

#### 4. Add CSS which really should be the last thing. Maybe give the user an option to customize their application?

#### 5. We will need to create a small routing system server side to handle calls to the alpha vantage API. We can't have api calls on the client because people can see our key and that's not good. We could make a restful api with nodejs/expressjs to keep consistency or tryout a swiss army knife language like python, perl, php, ruby etc.

## Resources 

Install NodeJS, by downloading it from their site. You'll need this to use npm but you'll never have to write something like this:

` $ node common.js  `

 It (should) installs node_modules in your directory which will be ignored by the gitignore file when you push it up (which is why it doesn't show up in master or my branch). Npm is part of the node_modules which will allow you to install the following below:

 Electron, jQuery and Express:

` $ npm init ` - this is if you want to create a new package.json file and delete the previous one.

` $ npm install -g electron `

` $ npm install electron --save `

` $ npm install jQuery `

` $ npm install express --save `

Plotly will just be used in a script tag from CDN.

We're also using Tensorflow's API which I don't have yet but will at some point once the wrapper idea is complete. Happy coding. 

To run the program write:

` $ npm start ` 

or alternatively:

` electron . `

In your project directory in cmd/powershell for Windows and terminal for Linux.
