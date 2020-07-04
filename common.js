var config = "";
var stockData = [];
var cryptoData = [];
var change;
const ipPort = "http://localhost:3000/";
const {ipcRenderer} = require('electron');

$(document).ready(function(){
    timeseriesScreen();
    cryptocurrencyScreen();
});

function callAlpha(url, open, close, high, low, event, value){
    $.get(url, function(data){
        var date = [];
        var close1 = [];
        var open1 = [];
        var high1 = [];
        var low1 = [];

        var counter = 0;

        for(var key in data){                
            if(counter > 0 ){
                for(var key2 in data[key]){
                    close1.push(data[key][key2][close]);
                    open1.push(data[key][key2][open]);
                    high1.push(data[key][key2][high]);
                    low1.push(data[key][key2][low]);
                    date.push(key2);
                }
            }
            counter++;
        }

        if(value == 'crypto'){
            cryptoData = [
                {
                    type: 'candlestick',
                    x: date,
                    close: close1,
                    open: open1,
                    high: high1,
                    low: low1,
                    xaxis: 'x',
                    yaxis:  'y',
                    increasing: {line: {color: 'blue'}},
                    decreasing: {line: {color: 'brown'}},
                    line: {color: 'rgba(31,119,180,1)'}
                }
            ];
        }
        else if(value == 'stock') {
            stockData = [
                {
                    type: 'candlestick',
                    x: date,
                    close: close1,
                    open: open1,
                    high: high1,
                    low: low1,
                    xaxis: 'x',
                    yaxis:  'y',
                    increasing: {line: {color: 'green'}},
                    decreasing: {line: {color: 'red'}},
                    line: {color: 'rgba(31,119,180,1)'}
                }
            ];
        }

        $(event).trigger('click');
    });
}

function cryptocurrencyScreen(){
    var cryptocurrency = new Object();
    var mainCryptoCurrencyURL = "";
    cryptocurrency.function = $('#cryptocurrencyFunction').val(); 
    cryptocurrency.symbol = $('.cryptoSymbolList').val();
    cryptocurrency.code = $('.marketCurrencyCode').val();

    $("#cryptocurrencyFunction").on("change", function(){
        cryptocurrency.function = $(this).val();
    });

    $(".cryptoSymbol").on("change", function(){
        cryptocurrency.symbol = $(this).val();
    });
    
    $(".marketCurrencyCode").on("change", function(data){
        cryptocurrency.code = $(this).val();
    });

    $('.cryptoevent').click(function(){
        ipcRenderer.send('crypto-window', cryptoData);
    });

    $('.submitCrypto').click(function(){
        console.log($("#cryptocurrencyFunction").val());
        if($("#cryptocurrencyFunction").val() != "CRYPTO_RATING"){
            mainCryptoCurrencyURL = ipPort + "api/v1/cryptocurrency/" + cryptocurrency.function + "/" + cryptocurrency.symbol + "/" + cryptocurrency.code;
        }
        else{
            mainCryptoCurrencyURL = ipPort + "api/v1/cryptocurrency/health/" + cryptocurrency.symbol;
        }
        var open ='1a. open (' + cryptocurrency.code +')';
        var high = '2a. high (' + cryptocurrency.code +')';
        var low ='3a. low (' + cryptocurrency.code +')';
        var close ='4a. close (' + cryptocurrency.code +')';
        var event = '.cryptoevent';

        callAlpha(mainCryptoCurrencyURL,open,close,high,low,event,'crypto');
    });

}

function timeseriesScreen(){

    $("body").css('background-color','#f49999');

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
       
        symSearchUrl = ipPort + 'api/v1/keywords/' + time_series.keyword;
       
        $.get(symSearchUrl,function(data){
            for(var i=0; i < data.bestMatches.length; i++){
                $('.symbolSearchList').append('<option>' + data.bestMatches[i]['1. symbol'] + '</option>');
            }            
        });
    });

    $(".symbolSearchList").on("change",function(){
        var symbolSearch = $(this).val();
        time_series.symbol = symbolSearch;

        var globalquoteURL = ipPort + "api/v1/symbol/" + time_series.symbol; 
        $.get(globalquoteURL, function(e){
            change = e['Global Quote']['10. change percent'];
        });
    });

    $(".submitStocks").click(function(e){
        if($("#stockFunction").val() == "TIME_SERIES_INTRADAY"){
            mainTimeSeriesURL = ipPort + "api/v1/timeseries/" + time_series.function + "/" + time_series.symbol + "/" + time_series.interval + "/" + time_series.outputsize + "/" + time_series.datatype;
        }
        else if($("#stockFunction").val() == "TIME_SERIES_DAILY" || $("#stockFunction").val() == "TIME_SERIES_DAILY_ADJUSTED"){
            mainTimeSeriesURL = ipPort + "api/v1/timeseries/" + time_series.function + "/" + time_series.symbol + "/null/" + time_series.outputsize + "/" + time_series.datatype;
        }
        else{
            mainTimeSeriesURL = ipPort + "api/v1/timeseries/" + time_series.function + "/" + time_series.symbol + "/null/null/" + time_series.datatype;
        }

        var close = '4. close';
        var open = '1. open';
        var high = '2. high';
        var low = '3. low';
        var event = '.event';
        callAlpha(mainTimeSeriesURL, open, close, high, low,event, 'stock');
    });    

} 