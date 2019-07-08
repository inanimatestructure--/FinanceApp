$(document).ready(function(){
    init();
});

function init(){
    $("#stockFunction").on("change", function(){
        console.log($(this).val());
    });

    $("#forexFunction").on("change", function(){
        console.log($(this).val());
    });

    $("#cryptocurrencyFunction").on("change", function(){
        console.log($(this).val());
    });
}


