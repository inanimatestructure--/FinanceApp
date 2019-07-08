$(document).ready(function(){
    init();
});

function init(){
    var stockFunction = new Object();
    $("#stockFunction").on("change", function(){
        console.log($(this).val());
    });
}


