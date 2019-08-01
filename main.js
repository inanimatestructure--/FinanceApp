/** 
**COMMUNICATION WITH IPC RENDER
**/
const {ipcRenderer} = require('electron');

ipcRenderer.on('action-hide-window', (event,args) =>{
    Plotly.newPlot('graphPlot', args);
});

$(document).ready(function(){
    var showGraph = $('#graphPlot');
    console.log("I'm Main Window");
});

/** 
**COMMUNICATION WITH IPC RENDER
**/
