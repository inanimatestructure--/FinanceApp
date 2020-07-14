const {ipcRenderer} = require('electron');
var layout;

$(document).ready(function(){
    layout = {
        dragmode: 'zoom',
        showlegend: false,
        paper_bgcolor: "rgba(0, 52, 52, 1)",
        plot_bgcolor: "rgba(0, 52, 52, 1)",
        yaxis: {
            linecolor: "white",
            color: "white"
        },
        xaxis: {
          linecolor: "white",
          color: "white",
          rangeslider: {
               visible: false
           }
        }
    };
});

ipcRenderer.on('action-hide-window', (event,args) => {
    Plotly.newPlot('graphPlot',args,layout);
});

ipcRenderer.on('action-header', (event,args) => {
    $('.header_change').html(args);
}); 

ipcRenderer.on('action-global', (event,args) => {
    $('.del').remove();
    if(args != "delete"){
        $("<p class='del'>"+args+"</p>").appendTo('#globalQuotes');
    }
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

