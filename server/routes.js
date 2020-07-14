const express = require('express');
const path = require('path');
var app = express();
const request = require('request');
const port = 3000;

const config = "<YOUR_APIKEY_HERE>";
const alphaStartUrl = "https://www.alphavantage.co/query?";

app.listen(port, () => {
   console.log("Server running on port 3000");
});

/***  
 * TIME SERIES ROUTES
 * **/

app.get('/quit', function(req,res){
   res.send('closing server...');
   app.close();
});

app.get('/api/v1/timeseries/:function/:symbol/:interval/:outputsize/:datatype', function(req,res){
   var func = req.params.function;
   var symbol = req.params.symbol;
   var interval = req.params.interval;
   var outputsize = req.params.outputsize;
   var datatype = req.params.datatype;

   var mainTimeSeriesURL = "";
   if(func == "TIME_SERIES_INTRADAY"){
      mainTimeSeriesURL = alphaStartUrl + "function=" + func + "&symbol=" + symbol + "&interval=" + interval + "&outputsize=" + outputsize + "&datatype=" + datatype + "&apikey=" + config;
   }
   else if(func == "TIME_SERIES_DAILY" || func == "TIME_SERIES_DAILY_ADJUSTED"){
      mainTimeSeriesURL = alphaStartUrl + "function=" + func + "&symbol=" + symbol + "&outputsize=" + outputsize + "&datatype=" + datatype + "&apikey=" + config;
   } 
   else{
      mainTimeSeriesURL = alphaStartUrl + "function=" + func + "&symbol=" + symbol + "&datatype=" + datatype + "&apikey=" + config;
   }

   request(mainTimeSeriesURL, function(error,response,body){
      var data = JSON.parse(body);
      res.send(data);
   });
   
    
});

app.get('/api/v1/keywords/:keywords', function(req,res){
   var keywords = req.params.keywords;
   var symSearchUrl = alphaStartUrl + "function=SYMBOL_SEARCH&keywords=" + keywords + "&apikey=" + config;
   request(symSearchUrl, function(error,response,body){
      var data = JSON.parse(body);
      res.send(data);
   });
});


app.get('/api/v1/symbol/:symbol', function(req,res){
   var symbol = req.params.symbol;
   var globalQuoteURL = alphaStartUrl + "function=GLOBAL_QUOTE&symbol=" + symbol + "&apikey=" + config; 
   request(globalQuoteURL, function(error,response,body){
      var data = JSON.parse(body);
      res.send(data);
   });
});

/**
 * 
 * TIME SERIES ROUTES
 */

 /**
  * 
  * CRYPTOCURRENCY ROUTES
  */

app.get('/api/v1/cryptocurrency/:function/:symbol/:market', function(req,res){
   var symbol = req.params.symbol;
   var market = req.params.market; 
   var cryptoURL = "";
   if(req.params.function == "DIGITAL_CURRENCY_DAILY"){
      cryptoURL = alphaStartUrl + "function=DIGITAL_CURRENCY_DAILY&symbol=" + symbol + "&market=" + market + "&apikey=" + config;
   }
   else if(req.params.function == "DIGITAL_CURRENCY_WEEKLY"){
      cryptoURL = alphaStartUrl + "function=DIGITAL_CURRENCY_WEEKLY&symbol=" + symbol + "&market=" + market + "&apikey=" + config;
   }
   else if(req.params.function == "DIGITAL_CURRENCY_MONTHLY"){
      cryptoURL = alphaStartUrl + "function=DIGITAL_CURRENCY_MONTHLY&symbol=" + symbol + "&market=" + market + "&apikey=" + config;
   }
   request(cryptoURL,function(error,response,body){
      var data = JSON.parse(body);
      res.send(data);
   });
});

app.get('/api/v1/cryptocurrency/health/:symbol', function(req,res){
   var symbol = req.params.symbol;
   var cryptohealthURL =  alphaStartUrl + "function=CRYPTO_RATING&symbol=" + symbol + "&apikey=" + config;
   request(cryptohealthURL,function(error,response,body){
      var data = JSON.parse(body);
      res.send(data);
   });
});
