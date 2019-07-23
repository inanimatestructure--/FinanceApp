const ipcRenderer = require('electron').ipcRenderer;

let name = $('#name').val();

var divHandler = $('#graphDiv').val(); 
$('#graphDiv').click( function(event){
    ipcRenderer.send('nameMsg', name.value);
});

ipcRenderer.on('nameReply', function(event,arg) {
    console.log(arg) // why/what is not right..
});
