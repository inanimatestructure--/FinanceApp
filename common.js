var config = "";

$(document).ready(function(){
    timeseries();
    //forex();
    //cryptocurrency();
});

function mainScreen(data){
    console.log(data);
}

function forex(){
   var forex = new Object();
   forex.function = $('#forexFunction').val();
   $("#forexFunction").on("change", function(){
        forex.function = $(this).val();
   });
   
}

function cryptocurrency(){
    var cryptocurrency = new Object();
    cryptocurrency.function = $('#cryptocurrencyFunction').val(); 
    $("#cryptocurrencyFunction").on("change", function(){
        cryptocurrency.function = $(this).val();
    });
}

function timeseries(){

    var time_series = new Object();
    
    $('#symbols').hide();

    time_series.function = $('#stockFunction').val();
    time_series.datatype = $("#datatypeObject").val();  
    time_series.interval = $("#intervalStocks").val();
    time_series.datatype = $("#datatypeObject").val();
    time_series.datatype = $("#outputsizeList").val();

    $.getJSON("../config.json", function(data){
        config = data.alphakey;
    });
   
    var alphaStartUrl = "https://www.alphavantage.co/query?";
    var apikey = config;

    var symbolSearchUrl = "";
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

    $('#datatypeObject').change(function(){
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
       
        symSearchUrl = alphaStartUrl + "function=SYMBOL_SEARCH&keywords=" + time_series.keyword + "&apikey=" + config
       
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
            mainTimeSeriesURL = alphaStartUrl + "function=" + time_series.function + "&symbol" + time_series.symbol + "&interval=" + time_series.interval + "&outputsize=" + time_series.outputsize + "&datatype=" + time_series.datatype + "&apikey=" + apikey;
        }
        else if($("#stockFunction").val() == "TIME_SERIES_DAILY" || $("#stockFunction").val() == "TIME_SERIES_DAILY_ADJUSTED"){
            mainTimeSeriesURL = alphaStartUrl + "function=" + time_series.function + "&symbol" + time_series.symbol + "&outputsize=" + time_series.outputsize + "&datatype=" + time_series.datatype + "&apikey=" + apikey;
        }
        else{
            mainTimeSeriesURL = alphaStartUrl + "function=" + time_series.function + "&symbol" + time_series.symbol + "&datatype=" + time_series.datatype + "&apikey=" + apikey;
        }
        $.get(mainTimeSeriesURL ,function(data){
            mainScreen(data);
        });
    });    

} 
