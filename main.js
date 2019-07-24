/** 
**COMMUNICATION WITH IPC RENDER
**/
const { ipcRenderer } = require('electron');


$(document).ready(function(){
    var showGraph = $('#graphPlot');
    
    ipcRenderer.on('forWin2', function (event, arg){
        console.log(arg);
        showGraph.val() = arg;
    });
    

    console.log("I'm Main Window");
});

/** 
**COMMUNICATION WITH IPC RENDER
**/
