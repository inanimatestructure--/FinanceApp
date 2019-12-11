const express = require('express');
const router = express.Router();

const config = "2KZ9MV9TBQDE4YRY";
const alphaStartUrl = "https://www.alphavantage.co/query?";


router.get('/timeseries/#function/#symbol/#interval/#outputsize/#datatype',function(req,res){
   var mainTimeSeriesURL;
   if(functionA == "TIME_SERIES_INTRADAY"){
      mainTimeSeriesURL = alphaStartUrl + "function=" + time_series.function + "&symbol=" + time_series.symbol + "&interval=" + time_series.interval + "&outputsize=" + time_series.outputsize + "&datatype=" + time_series.datatype + "&apikey=" + config;
   }
   else if(functionA == "TIME_SERIES_DAILY" || functionA == "TIME_SERIES_DAILY_ADJUSTED"){
      mainTimeSeriesURL = alphaStartUrl + "function=" + time_series.function + "&symbol=" + time_series.symbol + "&outputsize=" + time_series.outputsize + "&datatype=" + time_series.datatype + "&apikey=" + config;
   } 
   else{
      mainTimeSeriesURL = alphaStartUrl + "function=" + time_series.function + "&symbol=" + time_series.symbol + "&datatype=" + time_series.datatype + "&apikey=" + config;
   }

   $.get('mainTimeSeriesURL',function(data){
         res.send(data);
   });
    
});

router.get('/timeseries/#keywords',function(req,res){
   var symSearchUrl = alphaStartUrl + "function=SYMBOL_SEARCH&keywords=" + time_series.keyword + "&apikey=" + config;
});


router.get('/#symbol',function(req,res){
   var globalQuoteURL = alphaStartUrl + "function=GLOBAL_QUOTE&symbol=" + time_series.symbol + "&apikey=" + config; 
});