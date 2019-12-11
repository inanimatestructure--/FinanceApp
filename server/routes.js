const express = require('express');
const path = require('path');
var app = express();
const request = require('request');

app.set('views', path.join(__dirname, '/html'));

const config = "2KZ9MV9TBQDE4YRY";
const alphaStartUrl = "https://www.alphavantage.co/query?";


app.get('/timeseries/#function/#symbol/#interval/#outputsize/#datatype', function(req,res){
   var mainTimeSeriesURL;
   if(functionA == "TIME_SERIES_INTRADAY"){
      mainTimeSeriesURL = alphaStartUrl + "function=" + time_series.function + "&symbol=" + time_series.symbol + "&interval=" + time_series.interval + "&outputsize=" + time_series.outputsize + "&datatype=" + time_series.datatype + "&apikey=" + config;
   }
   else if(functionA == "TIME_SERIES_DAILY" || functionA == "TIME_SERIES_DAILY_ADJUSTED"){
      mainTimeSeriesURL = alphaStartUrl + "function=" + time_series.function + "&symbol=" + time_series.symbol + "&outputsize=" + time_series.outputsize + "&datatype=" + time_series.datatype + "&apikey=" + config;
   } 
   else{
      mainTimeSeriesURL = alphaStartUrl + "function=" + req.function + "&symbol=" + req.symbol + "&datatype=" + req.datatype + "&apikey=" + config;
   }

   request(mainTimeSeriesURL, function(error,response,body){
      var data = JSON.parse(body);
      res.send(body);
   });
   
    
});

app.get('/timeseries/#keywords', function(req,res){
   var symSearchUrl = alphaStartUrl + "function=SYMBOL_SEARCH&keywords=" + req.keyword + "&apikey=" + config;
   request(symSearchUrl, function(error,response,body){
      res.send(body);
   });
});


app.get('/#symbol', function(req,res){
   var globalQuoteURL = alphaStartUrl + "function=GLOBAL_QUOTE&symbol=" + req.symbol + "&apikey=" + config; 
   request(globalQuoteURL, function(error,response,body){
      res.send(body);
   });
});