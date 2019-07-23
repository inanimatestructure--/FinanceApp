const electron = require('electron');
const url = require('url');
const path = require('path');

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
    
    // BUILD MENU FROM TEMPLATE
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	
    // INSERT MENU
    Menu.setApplicationMenu(mainMenu);
    
	/*** CURRENTLY NOT WORKING IN PROGRESS
	***/
	//SEND A MESSAGES BACK AND FORTH TO MAIN WINDOW AND COMMON WINDOWS
    ipcMain.on('Message',function(event,arg) {
	console.log("Name inside main process is: ", arg); // this comes form within window 1 -> and into the mainProcess
	event.sender.send('nameReply', { not_right: false }) // sends back/replies to window 1 - "event" is a reference to this chanel.
	stock.webContents.send('hi friend', arg); // sends the stuff from Window1 to Window2.
     } 
/****
	**/

	
});

/** FUNCTIONS TO OPEN WINDOWS TO PUT IN SPECIFICATIONS FOR MARKET GRAPHS **/

function mainWindow(){
    
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
    
    main.on('closed', function() {
        main = null;
    });
    
    return main;
}

function cryptocurrencyWindow(){
    cryptocurrency = new BrowserWindow({      
        width: 1200,
        height: 1200,
        autoHideMenuBar: true,
        title: 'Cryptocurrency',
        show: false,
        parent: main
    });

    cryptocurrency.loadURL(url.format({
        pathname: path.join(__dirname, 'html/cryptocurrency.html'),
        protocol: 'file:',
        slashes: true
    }));

    cryptocurrency.webContents.openDevTools();
   
    cryptocurrency.on('closed', function() {
        cryptocurrency = null;
    });
    
    return cryptocurrency;
}

function forexWindow(){
    forex = new BrowserWindow({      
        width: 1200,
        height: 1200,
        autoHideMenuBar: true,
        title: 'Forex',
        show: false,
        parent: main
    });

    forex.loadURL(url.format({
        pathname: path.join(__dirname, 'html/forex.html'),
        protocol: 'file:',
        slashes: true
    }));

    forex.webContents.openDevTools();
    
    forex.on('closed', function() {
       forex = null;
    });
    
    return forex;

}

function stockWindow(){
    stock = new BrowserWindow({      
        width: 1200, 
        height: 1200,
        autoHideMenuBar: true,
        title: 'Stocks',
        show: false,
        parent: main
    });

    stock.loadURL(url.format({
        pathname: path.join(__dirname, 'html/stocks.html'),
        protocol: 'file:',
        slashes: true
    }));

    stock.webContents.openDevTools();
    
    stock.on('closed', function() {
        stock = null;
    });

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
