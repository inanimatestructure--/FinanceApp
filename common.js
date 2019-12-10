var config = "";
var stockData = [];
var change;
const {ipcRenderer} = require('electron');

$(document).ready(function(){
    timeseriesScreen();
    //forexScreen();
    //cryptocurrencyScreen();
});

function forexScreen(){
   var Forex = new Object();
   Forex.function = $('#forexFunction').val();
   $("#forexFunction").on("change", function(){
        Forex.function = $(this).val();
   });
}

function cryptocurrencyScreen(){
    var Cryptocurrency = new Object();
    Cryptocurrency.function = $('#cryptocurrencyFunction').val(); 
    $("#cryptocurrencyFunction").on("change", function(){
        Cryptocurrency.function = $(this).val();
    });
}

function timeseriesScreen(){

    $("body").css('background-color','#696969');

    var time_series = new Object();
  

    time_series.function = $("#stockFunction").val();
    time_series.symbol = $("#symbolSearchList").val();  
    time_series.interval = $("#intervalStocks").val();
    time_series.datatype = $("#dtObject").val();
    time_series.outputsize = $("#outputsizeList").val();
    
    $('#symbols').hide();
    var alphaStartUrl = "https://www.alphavantage.co/query?";

    var symSearchUrl = "";
    var mainTimeSeriesURL = "";
  
    
    if($('.keywords').is(':empty')){
        $('.keywordsearch').attr("disabled", true);
    }

    $("#stockFunction").change(function(){
        time_series.function = $(this).val();
    });

    $('#intervalStocks').change(function(){
        time_series.interval = $(this).val();
    });

    $('.event').click(function(){
        ipcRenderer.send('global-quote', change);
        ipcRenderer.send('hide-stock-window', stockData);
    });

    $('#dtObject').change(function(){
        time_series.datatype = $(this).val();
    });

    $('#outputsizeList').change(function(){
        time_series.outputsize = $(this).val();
    });

    $('.keywords').change(function(){
        $('.keywordsearch').removeAttr("disabled");
    });

    $('.keywordsearch').click(function(e){
        $('.symbolSearchList').empty();
        $('#symbols').show();
        time_series.keyword = $('.keywords').val();
       
        symSearchUrl = '/timeseries/' + time_series.keyword;
       
        $.get(symSearchUrl,function(data){
            for(var i=0; i < data.bestMatches.length; i++){
                $('.symbolSearchList').append('<option>' + data.bestMatches[i]['1. symbol'] + '</option>');
            }            
        });
    });

    $(".symbolSearchList").on("change",function(){
        var symbolSearch = $(this).val();
        time_series.symbol = symbolSearch;

        var globalquoteURL = '/' + time_series.symbol; 
        $.get(globalquoteURL, function(e){
            change = e['Global Quote']['10. change percent'];
        });
    });

    $(".submit").click(function(e){
        if($("#stockFunction").val() == "TIME_SERIES_INTRADAY"){
            mainTimeSeriesURL = '/timeseries/' + time_series.function + "/" + time_series.symbol + "/" + time_series.interval + "/" + time_series.outputsize + "/" + time_series.datatype;
        }
        else if($("#stockFunction").val() == "TIME_SERIES_DAILY" || $("#stockFunction").val() == "TIME_SERIES_DAILY_ADJUSTED"){
            mainTimeSeriesURL = "/timeseries/" + time_series.function + "/" + time_series.symbol + "/" + time_series.outputsize + "/" + time_series.datatype;
        }
        else{
            mainTimeSeriesURL = alphaStartUrl + "function=" + time_series.function + "&symbol=" + time_series.symbol + "&datatype=" + time_series.datatype + "&apikey=" + config;
        }

        $.get(mainTimeSeriesURL ,function(data){
            var x1 = [];
            var y1 = [];
            var counter = 0;

            for(var key in data){
                // SKIPPING METADATA KINDA HACKY but whatever
                if(counter > 0 ){
                    for(var key2 in data[key]){
                        y1.push(data[key][key2]['4. close']);
                        x1.push(key2);
                    }
                }
                counter++;
            }
            stockData = [
                {
                    x: x1,
                    y: y1,
                    mode: 'lines+markers',
                    marker: {
                      color: 'rgb(217, 157, 255)',
                      size: 5
                    },
                    line: {
                        color: 'rgb(231, 99, 250)',
                        width: 2
                      }
                }
            ];

            $('.event').trigger('click');
        });
    });    

} 
