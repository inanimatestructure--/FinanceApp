var config = "";

const ipcRenderer = require('electron').ipcRenderer;

$(document).ready(function(){
    timeseriesScreen();

    let name = 'test';

    $('.submit').click( function(event){
        ipcRenderer.send('nameMsg', name);
    });

    ipcRenderer.on('nameReply', function(event,args){
        console.log(arg); // why/what is not right..
    });
    //forex();
    //cryptocurrency();
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

    var time_series = new Object();
    
    $('#symbols').hide();

    time_series.function = $("#stockFunction").val();
    time_series.symbol = $("#symbolSearchList").val();  
    time_series.interval = $("#intervalStocks").val();
    time_series.datatype = $("#dtObject").val();
    time_series.outputsize = $("#outputsizeList").val();

    $.getJSON("../alphakey.json", function(data){
        config = data.alphakey;
    });
   
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
       
        symSearchUrl = alphaStartUrl + "function=SYMBOL_SEARCH&keywords=" + time_series.keyword + "&apikey=" + config;
       
        $.get(symSearchUrl,function(data){
            for(var i=0; i < data.bestMatches.length; i++){
                $('.symbolSearchList').append('<option>' + data.bestMatches[i]['1. symbol'] + '</option>');
            }            
        });
    });

    $(".symbolSearchList").on("change",function(){
        var symbolSearch = $(this).val();
        time_series.symbol = symbolSearch;
    });

    $(".submit").click(function(e){
        if($("#stockFunction").val() == "TIME_SERIES_INTRADAY"){
            mainTimeSeriesURL = alphaStartUrl + "function=" + time_series.function + "&symbol=" + time_series.symbol + "&interval=" + time_series.interval + "&outputsize=" + time_series.outputsize + "&datatype=" + time_series.datatype + "&apikey=" + config;
        }
        else if($("#stockFunction").val() == "TIME_SERIES_DAILY" || $("#stockFunction").val() == "TIME_SERIES_DAILY_ADJUSTED"){
            mainTimeSeriesURL = alphaStartUrl + "function=" + time_series.function + "&symbol=" + time_series.symbol + "&outputsize=" + time_series.outputsize + "&datatype=" + time_series.datatype + "&apikey=" + config;
        }
        else{
            mainTimeSeriesURL = alphaStartUrl + "function=" + time_series.function + "&symbol=" + time_series.symbol + "&datatype=" + time_series.datatype + "&apikey=" + config;
        }
        $.get(mainTimeSeriesURL ,function(data){
            var data2 = [
            {
                x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
                y: [1, 3, 6],
                type: 'scatter'
            }
            ];
              
            Plotly.newPlot('myDiv', data2);
        });
    });    

} 
