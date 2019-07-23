const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let main
let stock
let forex
let cryptocurrency

// LISTEN FOR APP TO BE READY
app.on('ready', function(){
    //CREATE NEW WINDOW 
    main = new BrowserWindow({
        width: 1200,
        height: 1200
    });
    // LOAD HTML INTO WINDOW

    main.loadURL(url.format({
        pathname: path.join(__dirname, 'html/main.html'),
        protocol:'file:',
        slashes: true
    }));

    main.webContents.openDevTools();

    // BUILD MENU FROM TEMPLATE
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    // INSERT MENU
    Menu.setApplicationMenu(mainMenu);


});

/** FUNCTIONS TO OPEN WINDOWS TO PUT IN SPECIFICATIONS FOR MARKET GRAPHS **/

function cryptocurrencyWindow(){
    cryptocurrency = new BrowserWindow({      
        width: 1200,
        height: 1200,
        autoHideMenuBar: true,
        title: 'Cryptocurrency',
        parent: main
    });

    cryptocurrency.loadURL(url.format({
        pathname: path.join(__dirname, 'html/cryptocurrency.html'),
        protocol: 'file:',
        slashes: true
    }));

    cryptocurrency.webContents.openDevTools();

}

function forexWindow(){
    forex = new BrowserWindow({      
        width: 1200,
        height: 1200,
        autoHideMenuBar: true,
        title: 'Forex',
        parent: main
    });

    forex.loadURL(url.format({
        pathname: path.join(__dirname, 'html/forex.html'),
        protocol: 'file:',
        slashes: true
    }));

    forex.webContents.openDevTools();

}

function stockWindow(){
    stock = new BrowserWindow({      
        width: 1200, 
        height: 1200,
        autoHideMenuBar: true,
        title: 'Stocks',
        parent: main
    });

    stock.loadURL(url.format({
        pathname: path.join(__dirname, 'html/stocks.html'),
        protocol: 'file:',
        slashes: true
    }));

    stock.webContents.openDevTools();

}

/**Main Menu Template for the app */

const mainMenuTemplate = [
    {
        label: 'Menu',
        submenu: [
            {
                label: 'Stocks',
                click(){ stockWindow(); }
            },
            {
                label: 'Forex',
                click(){ forexWindow(); }
            },
            {
                label: 'Cryptocurrency',
                click(){ cryptocurrencyWindow(); }
            }
        ]
    },
    {
        label: 'Quit',
        click(){ app.quit(); }
    }
];
