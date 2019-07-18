$(document).ready(function(){
    init();

});

function init(){

    $('#symbols').hide();

    var apikey = 'demo'; /**CHANGE THIS TO WHATEVER YOUR KEY IS */
    var time_series = new Object();
    var forex = new Object();
    var config = "";

    $.getJSON("../config.json", function(data){
        config = data.alphakey;
    });
    
    var cryptocurrency = new Object();
    var alphaStartUrl = "https://www.alphavantage.co/query?";
    
    var apikey = config.alphakey;

    time_series.function = $('#stockFunction').val();
    forex.function = $('#forexFunction').val();
    cryptocurrency.function = $('#cryptocurrencyFunction').val();

    if($('.keywords').is(':empty')){
        $('.keywordsearch').attr("disabled", true);
    }

    $('.keywords').change(function(data){
        $('.keywordsearch').removeAttr("disabled");
    });

    $('.keywordsearch').click(function(e){
        $('#symbols').show();
        time_series.keyword = $('.keywords').val();
        $.get(alphaStartUrl + "function=SYMBOL_SEARCH&keywords=" + time_series.keyword + "&apikey=" + config,function(data){
            console.log(data);
        });
    });

    $(".symbolSearchList").on("change",function(){
        var symbolSearch = $(this).val();

        time_series.symbol = symbolSearch;
        forex.symbol = symbolSearch;
        cryptocurrency.symbol = symbolSearch; 

    });

    $.get(alphaStartUrl + "function=" + time_series.function + "&keywords=" + time_series.keyword + "&apikey=" + apikey,function(data){

    });

    $.get("https://www.alphavantage.co/query?function=",function(data){
        
    });

    $.get("https://www.alphavantage.co/query?function=",function(data){

    });

    $("#stockFunction").on("change", function(){
        time_series.function = $(this).val();
    });

    $("#forexFunction").on("change", function(){
        forex.function = $(this).val();
    });

    $("#cryptocurrencyFunction").on("change", function(){
        cryptocurrency.function = $(this).val();
    });

} 


