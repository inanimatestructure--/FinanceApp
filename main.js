const { ipcRenderer } = require('electron');

var showGraph = $('#graphPlot').val();

ipcRenderer.on('forWin2', function (event, arg){
    console.log(arg);
    showGraph.innerHTML = arg;
});

console.log("I'm Main Window");
