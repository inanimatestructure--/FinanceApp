# Finance Application

## Main Idea
This project is designed by yours truly (:^)) to grab stock data from Alpha Vantage and insert it into an electron app. Ideally I'd like to have Google's Tensorflow API be able to predict stock prices using a machine learning algorithm. Now which one we should use and why might take some research but as of right now I'd like to have a fully functioning electron wrapper for the AV API. 

#### 1. If there's any other way this app could be more functional/user friendly (IE placements of html or jquery/js animations) I'd love to hear some ideas. I would like to just get it functioning at this point but any kind of aesthetic change is welcome. Adding a JS framework for SPA integration is also a topic of discussion.

#### 2. Add CSS which really should be the last thing. Maybe give the user an option to customize their application?

## Resources 

Install NodeJS, by downloading it from their site. You'll need this to use npm but you'll never have to write something like this:

` $ node common.js  `

 It (should) install node_modules in your directory which will be ignored by the gitignore file when you push it up (which is why it doesn't show up in master or my branch). Npm is part of the node_modules which will allow you to install the following below:

 Electron, jQuery, XMLHttpRequest and Express:

` $ npm init ` - this is if you want to create a new package.json file and delete the previous one.

` $ npm install -g electron `

` $ npm install XMLHttpRequest `

` $ npm install electron --save `

` $ npm install jQuery `

` $ npm install express --save `



Plotly will just be used in a script tag from CDN.

We're also using Tensorflow's API which I don't have yet but will at some point once the wrapper idea is complete. Happy coding. 

To run the program write:

` $ npm start ` 

In your project directory in cmd/powershell for Windows and terminal for Linux.
