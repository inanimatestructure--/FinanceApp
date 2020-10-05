# Finance Application

## Main Idea
This project is designed by yours truly (:^)) to grab stock data from Alpha Vantage and insert it into an electron app. Ideally I'd like to have Google's Tensorflow API be able to predict stock prices using a machine learning algorithm. Now which one we should use and why might take some research but as of right now I'd like to have a fully functioning electron wrapper for the AV API. 

## Resources 

First two things to do is to create your own branch off of master, and then create an API key for Alpha Vantage:

https://www.alphavantage.co/support/#api-key

DO NOT push your code up with the key in the ` routes.js ` file in the server folder. Use it on your localhost only.

Install NodeJS, by downloading it from their site. You'll need this to use npm but you'll never have to write something like this:

` $ node common.js  `

 It (should) install node_modules in your directory which will be ignored by the gitignore file when you push it up (which is why it doesn't show up in master or my branch). Npm is part of the node_modules which will allow you to install the following below:

 Electron, jQuery, XMLHttpRequest and Express:

` $ npm init ` - this is if you want to create a new package.json file and delete the previous one. 

In package.json add a script tag that says : ` "start" : "electron ." 

` $ npm install -g electron `

` $ npm install XMLHttpRequest ` - I don't really think this is working the way I want it to yet but keeping it here in case I find a better solution.

` $ npm install electron --save `

` $ npm install jQuery `

` $ npm install request `

` $ npm install express --save `


Plotly will just be used in a script tag from CDN.

We're also going to be using Tensorflow's API which I don't have yet but will at some point once the wrapper idea is complete.

To run the program write:

` $ npm start ` 

In your project directory in cmd/powershell for Windows and terminal for Linux/Mac.

## How the JavaScript in the application works

` app.js ` contains all the electron structure javascript to run the desktop application in nodejs like setting up main menus, passing data through to other windows etc.
` main.js ` contains all the data that gets sent back and forth from various screens so it's common among all the html files.
` common.js ` contains all the logic that triggers events on the page.
` routes.js ` contains the expressjs REST api.
