const electron = require('electron');
const url = require('url');
const path = require('path');
require('./server/routes.js');

const {app, BrowserWindow, ipcMain, Menu} = electron;

let main
let stock
let forex
let cryptocurrency

// LISTEN FOR APP TO BE READY
app.on('ready', function(){
    
    main = mainWindow();
    stock = stockWindow();
    forex = forexWindow();
    cryptocurrency = cryptocurrencyWindow();

    ipcMain.on('hide-stock-window',(event,args) => {
        main.webContents.send('action-hide-window',args);
    });
    
    ipcMain.on('global-quote',(event,args) => {
        main.webContents.send('action-global',args);
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
        height: 1200,
        webPreferences: {
            nodeIntegration: true
        },
    });
    
    main.on('close',event => {
        mainWindow = null;
    });
    // LOAD HTML INTO WINDOW

    main.loadURL(url.format({
        pathname: path.join(__dirname, 'html/main.html'),
        protocol: 'file:',
        slashes: true
    }));

    // main.webContents.openDevTools();
    
    return main;
}

function cryptocurrencyWindow(){
    cryptocurrency = new BrowserWindow({      
        width: 400,
        height: 400,
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

    // cryptocurrency.webContents.openDevTools();

    
    return cryptocurrency;
}

function forexWindow(){
    forex = new BrowserWindow({      
        width: 400,
        height: 400,
        autoHideMenuBar: true,
        title: 'Forex',
        show: false,
        webPreferences: {
            nativeWindowOpen: true,
            nodeIntegration: true
 
        },

    });

    forex.loadURL(url.format({
        pathname: path.join(__dirname, 'html/forex.html'),
        protocol: 'file:',
        slashes: true
    }));

    // forex.webContents.openDevTools();
    
    return forex;

}

function stockWindow(){
    stock = new BrowserWindow({      
        width: 400, 
        height: 400,
        autoHideMenuBar: true,
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

    stock.webContents.openDevTools();

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
                label: 'Forex',
                click(){ forex.show(); }
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
