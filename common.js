$(document).ready(function(){
    init();
});

function init(){
    var time_series = new Object();
    var forex = new Object();
    var cryptocurrency = new Object();

    $.get("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=demo",function(data){

        
        $(".symbolSearchList").on("change",function(){
            
            var symbolSearch = $(this).val();
            
            time_series.symbol = symbolSearch;
            forex.symbol = symbolSearch;
            cryptocurrency.symbol = symbolSearch; 


        });
    });

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


