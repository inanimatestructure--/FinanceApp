$(document).ready(function(){
    init();
});

function init(){

    $('#symbols').hide();

    var apikey = 'demo';
    var time_series = new Object();
    var forex = new Object();
    var cryptocurrency = new Object();
    var alphaStartUrl = "https://www.alphavantage.co/query?";

    $('.keywordsearch').click(function(e){
        $('#symbols').show();
    });

    $(".symbolSearchList").on("change",function(){
        var symbolSearch = $(this).val();

        time_series.symbol = symbolSearch;
        forex.symbol = symbolSearch;
        cryptocurrency.symbol = symbolSearch; 

    });

/**
 * 
 *  GET FUNCTIONS FOR ALPHA VANTAGE
 * 
 */

    $.get(alphaStartUrl + "function=SYMBOL_SEARCH&keywords=BA&apikey=" + apikey,function(data){
        
    });

    $.get(alphaStartUrl + "function=" + time_series.function + "&keywords=" + time_series.keyword + "&apikey=" + apikey,function(data){

    });

    $.get("https://www.alphavantage.co/query?function=",function(data){
        
    });

    $.get("https://www.alphavantage.co/query?function=",function(data){

    });

/**
 * 
 *  GET FUNCTIONS FOR ALPHA VANTAGE
 * 
 */

    $("#stockFunction").on("change", function(){
        time_series.function = $(this).val();
        console.log(time_series.function);
    });

    $("#forexFunction").on("change", function(){
        forex.function = $(this).val();
        console.log(forex.function);
    });

    $("#cryptocurrencyFunction").on("change", function(){
        cryptocurrency.function = $(this).val();
        console.log(cryptocurrency.function);
    });

} 


