const express = require('express');
const path = require('path');
var app = express();
const request = require('request');
const port = 3000;

const config = "2KZ9MV9TBQDE4YRY";
const alphaStartUrl = "https://www.alphavantage.co/query?";

app.listen(port, () => {
   console.log("Server running on port 3000");
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