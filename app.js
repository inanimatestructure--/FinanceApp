const electron = require('electron');
const url = require('url');
const path = require('path');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
require('./server/routes.js');

const {app, BrowserWindow, ipcMain, Menu} = electron;

let main
let stock
let cryptocurrency

// LISTEN FOR APP TO BE READY
app.on('ready', function(){
    
    main = mainWindow();
    stock = stockWindow();
    cryptocurrency = cryptocurrencyWindow();

    ipcMain.on('hide-stock-window',(event,args) => {
        main.webContents.send('action-hide-window',args);
    });
    
    ipcMain.on('change-header', (event,args) => {
        main.webContents.send('action-header',args);
    });

    ipcMain.on('global-quote',(event,args) => {
        main.webContents.send('action-global',args);
    });

    ipcMain.on('crypto-window',(event,args) => {
        main.webContents.send('action-crypto',args);
    });

    // BUILD MENU FROM TEMPLATE
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	
    // INSERT MENU
    Menu.setApplicationMenu(mainMenu);


});

app.on("window-all-closed", function() {
    if (process.platform !== "darwin") {
        app.quit();
    }
});



/** FUNCTIONS TO OPEN WINDOWS TO PUT IN SPECIFICATIONS FOR MARKET GRAPHS **/

function mainWindow(){
    
//CREATE NEW WINDOW 
    main = new BrowserWindow({
        width: 1200,
        height: 1000,
        webPreferences: {
            nodeIntegration: true
        },
    });
    
    // LOAD HTML INTO WINDOW

    main.loadURL(url.format({
        pathname: path.join(__dirname, 'html/main.html'),
        protocol: 'file:',
        slashes: true
    }));

    //IF THE MAIN WINDOW CLOSES CLOSE THE SERVER 

    main.on('close', function(e){ 
        
        var request = new XMLHttpRequest();

        request.open('GET', 'https://localhost:3000/quit', true);
        
        request.onload = function () {
            console.log(this.response);
        };

        app.quit();
    });
    
    // UNCOMMENT THIS ONLY IF YOU  WANT TO DEBUG THE MAIN SCREEN IN THE DEVELOPER TOOLS/INSPECT ELEMENT

    // main.webContents.openDevTools();
    
    return main;
}

function cryptocurrencyWindow(){
    cryptocurrency = new BrowserWindow({      
        width: 400,
        height: 200,
        autoHideMenuBar: true,
        title: 'Cryptocurrency',
        show: false,
        webPreferences: {
            nativeWindowOpen: true,
            nodeIntegration: true
        },
    });

    cryptocurrency.loadURL(url.format({
        pathname: path.join(__dirname, 'html/cryptocurrency.html'),
        protocol: 'file:',
        slashes: true
    }));

    cryptocurrency.on('close', function (e) { 
        e.preventDefault();
        cryptocurrency.hide();
    });

    // cryptocurrency.webContents.openDevTools();

    
    return cryptocurrency;
}

function stockWindow(){
    stock = new BrowserWindow({      
        width: 400, 
        height: 375,
        autoHideMenuBar: true,
        parent: main,
        title: 'Stocks',
        show: false,
        webPreferences: {
            nativeWindowOpen: true,
            nodeIntegration: true
        },
    });

    stock.loadURL(url.format({
        pathname: path.join(__dirname, 'html/stocks.html'),
        protocol: 'file:',
        slashes: true
    }));
    
    stock.on('close', function (e) { 
        e.preventDefault();
        stock.hide();
    });

    // stock.webContents.openDevTools();

    return stock;
}

/**Main Menu Template for the app */

const mainMenuTemplate = [
    {
        label: 'Menu',
        submenu: [
            {
                label: 'Stocks',
                click(){ stock.show(); }
            },
            {
                label: 'Cryptocurrency',
                click(){ cryptocurrency.show(); }
            }
        ]
    },
    {
        label: 'Quit',
        click(){ app.quit(); }
    }
];
