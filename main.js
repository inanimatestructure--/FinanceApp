const {ipcRenderer} = require('electron');
var layout;

$(document).ready(function(){
    layout = {
        plot_bgcolor:"black",
        paper_bgcolor:"#696969",
    };
    $("body").css('background-color','#696969');
});

ipcRenderer.on('action-hide-window', (event,args) =>{
    Plotly.newPlot('graphPlot', args,layout);
});

ipcRenderer.on('action-global', (event,args) => {
    $('.del').remove();
    $("<p class='del'>"+args+"</p>").appendTo('#globalQuotes');

    if(parseFloat(args) > 0){
        $('.del').css('background-color','green');
    }
    else{
        $('.del').css('background-color','red');
    }
});

