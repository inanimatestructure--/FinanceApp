const {ipcRenderer} = require('electron');
var layout;

$(document).ready(function(){
    layout = {
        dragmode: 'zoom',
        showlegend: false,
        xaxis: {
          rangeslider: {
               visible: false
           }
        }
    };
    $("body").css('background-color','#AAFCFC');
});

ipcRenderer.on('action-hide-window', (event,args) => {
    Plotly.newPlot('graphPlot',args,layout);
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

ipcRenderer.on('action-crypto', (event, args) => {
    Plotly.newPlot('graphPlot',args,layout);
});

