const express = require('express');
const app = express();

const alphakey = "2KZ9MV9TBQDE4YRY";
const alphaStartUrl = "https://www.alphavantage.co/query?";

app.get('/timeseries/#function/#symbol/#outputsize/#datatype/#interval',function(req,res){
   var mainTimeSeriesURL = "";
});

app.get('/timeseries/#function/#keywords',function(req,res){
   var symSearchUrl = alphaStartUrl + "function=SYMBOL_SEARCH&keywords=" + time_series.keyword + "&apikey=" + config;
});

app.get('/timeseries/#function/#symbol',function(req,res){

});