var plotly = require('plotly')('jakehollis425','71jKm0ZEjaalP0OfkPV3');
var unirest = require('unirest');
const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let main

let stockIntraday
let stockDaily
let stockDailyAdjusted
let stockWeekly
let stockWeeklyAdjusted
let stockMonthly
let stockMonthlyAdjusted
let stockCurrencyExchange
let stockSymbolSearch
let stockGlobalQuotes

let forexDaily
let forexIntraDay
let forexMonthly
let forexWeekly

let cryptocurrencyDaily
let cryptocurrencyExchange
let cryptocurrencyMonthly
let cryptocurrencyWeekly

// LISTEN FOR APP TO BE READY
app.on('ready', function(){
    //CREATE NEW WINDOW 
    main = new BrowserWindow({
        width: 1250,
        height: 900
    });
    // LOAD HTML INTO WINDOW

    main.loadURL(url.format({
        pathname: path.join(__dirname, 'html/main.html'),
        protocol:'file:',
        slashes: true
    }));

    // BUILD MENU FROM TEMPLATE
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    // INSERT MENU
    Menu.setApplicationMenu(mainMenu);

});

/**
 * 
 * FUNCTIONS TO OPEN WINDOWS TO PUT IN SPECIFICATIONS FOR MARKET GRAPHS 
 * 
 * */

function cryptocurrencyMonthlyWindow(){
    cryptocurrencyMonthly = new BrowserWindow({      
        width: 500,
        height: 500,
        title: 'Intraday Stocks',
        parent: main
    });

    cryptocurrencyMonthly.loadURL(url.format({
        pathname: path.join(__dirname, 'html/intraday.html'),
        protocol: 'file:',
        slashes: true
    }));
}

function cryptocurrencyWeeklyWindow(){
    cryptocurrencyWeekly = new BrowserWindow({      
        width: 500,
        height: 500,
        title: 'Intraday Stocks',
        parent: main
    });

    cryptocurrencyWeekly.loadURL(url.format({
        pathname: path.join(__dirname, 'html/intraday.html'),
        protocol: 'file:',
        slashes: true
    }));
}

function cryptocurrencyExchangeWindow(){
    cryptocurrencyExchange = new BrowserWindow({      
        width: 500,
        height: 500,
        title: 'Intraday Stocks',
        parent: main
    });

    cryptocurrencyExchange.loadURL(url.format({
        pathname: path.join(__dirname, 'html/intraday.html'),
        protocol: 'file:',
        slashes: true
    }));
}

function cryptocurrencyDailyWindow(){
    cryptocurrencyDaily = new BrowserWindow({      
        width: 500,
        height: 500,
        title: 'Intraday Stocks',
        parent: main
    });

    cryptocurrencyDaily.loadURL(url.format({
        pathname: path.join(__dirname, 'html/intraday.html'),
        protocol: 'file:',
        slashes: true
    }));
}



function forexMonthlyWindow(){
    forexMonthly = new BrowserWindow({      
        width: 500,
        height: 500,
        title: 'Intraday Stocks',
        parent: main
    });

    forexMonthly.loadURL(url.format({
        pathname: path.join(__dirname, 'html/intraday.html'),
        protocol: 'file:',
        slashes: true
    }));
}

function forexWeeklyWindow(){
    forexWeekly = new BrowserWindow({      
        width: 500,
        height: 500,
        title: 'Intraday Stocks',
        parent: main
    });

    forexWeekly.loadURL(url.format({
        pathname: path.join(__dirname, 'html/intraday.html'),
        protocol: 'file:',
        slashes: true
    }));
}

function forexIntraDayWindow(){
    forexIntraDay = new BrowserWindow({      
        width: 500,
        height: 500,
        title: 'Intraday Stocks',
        parent: main
    });

    forexIntraDay.loadURL(url.format({
        pathname: path.join(__dirname, 'html/intraday.html'),
        protocol: 'file:',
        slashes: true
    }));
}

function forexDailyWindow(){
    forexDaily = new BrowserWindow({      
        width: 500,
        height: 500,
        title: 'Intraday Stocks',
        parent: main
    });

    forexDaily.loadURL(url.format({
        pathname: path.join(__dirname, 'html/intraday.html'),
        protocol: 'file:',
        slashes: true
    }));
}



function stockGlobalQuotesWindow(){
    stockGlobalQuotes = new BrowserWindow({      
        width: 500,
        height: 500,
        title: 'Intraday Stocks',
        parent: main
    });

    stockGlobalQuotes.loadURL(url.format({
        pathname: path.join(__dirname, 'html/stocks/globalquotes.html'),
        protocol: 'file:',
        slashes: true
    }));

}

function stockSymbolSearchWindow(){
    stockSymbolSearch = new BrowserWindow({      
        width: 500,
        height: 500,
        title: 'Intraday Stocks',
        parent: main
    });

    stockSymbolSearch.loadURL(url.format({
        pathname: path.join(__dirname, 'html/stocks/symbolsearch.html'),
        protocol: 'file:',
        slashes: true
    }));

}

function stockCurrencyExchangeWindow(){
    stockCurrencyExchange = new BrowserWindow({      
        width: 500,
        height: 500,
        title: 'Intraday Stocks',
        parent: main
    });

    stockCurrencyExchange.loadURL(url.format({
        pathname: path.join(__dirname, 'html/stocks/currencyexchange.html'),
        protocol: 'file:',
        slashes: true
    }));

}

function stockMonthlyAdjustedWindow(){
    stockMonthlyAdjusted = new BrowserWindow({      
        width: 500,
        height: 500,
        title: 'Intraday Stocks',
        parent: main
    });

    stockMonthlyAdjusted.loadURL(url.format({
        pathname: path.join(__dirname, 'html/stocks/monthlyadjusted.html'),
        protocol: 'file:',
        slashes: true
    }));

}

function stockMonthlyWindow(){
    stockMonthly = new BrowserWindow({      
        width: 500,
        height: 500,
        title: 'Intraday Stocks',
        parent: main
    });

    stockMonthly.loadURL(url.format({
        pathname: path.join(__dirname, 'html/stocks/monthly.html'),
        protocol: 'file:',
        slashes: true
    }));

}

function stockWeeklyAdjustedWindow(){
    stockWeeklyAdjusted = new BrowserWindow({      
        width: 500,
        height: 500,
        title: 'Intraday Stocks',
        parent: main
    });

    stockWeeklyAdjusted.loadURL(url.format({
        pathname: path.join(__dirname, 'html/stocks/weeklyadjusted.html'),
        protocol: 'file:',
        slashes: true
    }));

}

function stockWeeklyWindow(){
    stockWeekly = new BrowserWindow({      
        width: 500,
        height: 500,
        title: 'Intraday Stocks',
        parent: main
    });

    stockWeekly.loadURL(url.format({
        pathname: path.join(__dirname, 'html/stocks/weekly.html'),
        protocol: 'file:',
        slashes: true
    }));

}

function stockDailyAdjustedWindow(){
    stockDailyAdjusted = new BrowserWindow({      
        width: 500,
        height: 500,
        title: 'Intraday Stocks',
        parent: main
    });

    stockDailyAdjusted.loadURL(url.format({
        pathname: path.join(__dirname, 'html/stocks/dailyadjusted.html'),
        protocol: 'file:',
        slashes: true
    }));

}

function stockDailyWindow(){
    stockDaily = new BrowserWindow({      
        width: 500,
        height: 500,
        title: 'Intraday Stocks',
        parent: main
    });

    stockDaily.loadURL(url.format({
        pathname: path.join(__dirname, 'html/stocks/daily.html'),
        protocol: 'file:',
        slashes: true
    }));

}

function stockIntraDayWindow(){
    stockIntraday = new BrowserWindow({      
        width: 500,
        height: 500,
        title: 'Intraday Stocks',
        parent: main
    });

    stockIntraday.loadURL(url.format({
        pathname: path.join(__dirname, 'html/stocks/intraday.html'),
        protocol: 'file:',
        slashes: true
    }));

}

const mainMenuTemplate = [
    {
        label: 'Stocks',
        submenu: [
            {
                label: 'Intraday',
                click(){
                    stockIntraDayWindow();
                }
            },
            {
                label: 'Daily',
                click(){
                    stockDailyWindow();
                }
            },
            {
                label: 'Daily Adjusted',
                click(){
                    stockDailyAdjustedWindow();
                }
            },
            {
                label: 'Weekly',
                click(){
                    stockWeeklyWindow();
                }
            },
            {
                label: 'Weekly Adjusted',
                click(){
                    stockWeeklyAdjustedWindow();
                }
            },
            {
                label: 'Monthly',
                click(){
                    stockMonthlyWindow();
                }  
            },
            {
                label: 'Monthly Adjusted',
                click(){
                    stockMonthlyAdjustedWindow();
                }
            }, 
            {
                label: 'Currency Exchange Rate',
                click(){
                    stockCurrencyExchangeWindow();
                }
            },
            {
                label: 'Symbol Search',
                click(){
                    stockSymbolSearchWindow();
                }
            },
            {
                label: 'Global Quotes',
                click(){
                    stockGlobalQuotesWindow();
                }
            }
        ]
    },
    {
        label: 'Forex',
        submenu: [
            {
                label: 'Intraday',
                click(){
                    forexIntraDayWindow();
                }
            },
            {
                label: 'Daily',
                click(){
                    forexDailyWindow();
                }
            },
            {
                label: 'Weekly',
                click(){
                    forexWeeklyWindow();
                }
            },
            {
                label: 'Monthly',
                click(){
                    forexMonthlyWindow();
                }  
            },
        ]
    },
    {
        label: 'Cryptocurrency',
        submenu: [
            {
                label: 'Currency Exchange Rate',
                click(){
                    cryptocurrencyExchangeWindow();
                }
            },
            {
                label: 'Digital Currency Daily',
                click(){
                    cryptocurrencyDailyWindow();
                }
            },
            {
                label: 'Digitial Currency Weekly',
                click(){
                    cryptocurrencyWeeklyWindow();
                }
             },
             {
                label: 'Digital Currency Monthly',
                click(){
                    cryptocurrencyMonthlyWindow();
                }
             },
        ]
    },
    {
        label: 'Quit',
        click(){
            app.quit();
        }
    }
];



/***
 * 
 * 
 * I'LL  FIND SOME USE FOR THIS LATER *
 * 
 * 
 * **/



// var data=fs.readFileSync('urls.json', 'utf8');
// var words=JSON.parse(data);

// Get process.stdin as the standard input object.



// var readline = process.stdin;
// readline.setEncoding('utf-8');

// console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");

// readline.on('data', function (data) {
//     if(data == 0){ 
//         unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&outputsize=compact&apikey=2KZ9MV9TBQDE4YRY") 
//             .end(function(result){
//                 console.log(result.status,result.headers,result.body);
//                 console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
//             });
//     }
//     if(data == 1){ 
//         unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=2KZ9MV9TBQDE4YRY") 
//             .end(function(result){
//                 console.log(result.status,result.headers,result.body);
//                 console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
//             });
//     }
//     if(data == 2){ 
//         unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=2KZ9MV9TBQDE4YRY") 
//             .end(function(result){
//                 console.log(result.status,result.headers,result.body);
//                 console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
//             });
//     }
//     if(data == 3){ 
//         unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&apikey=2KZ9MV9TBQDE4YRY") 
//             .end(function(result){
//                 console.log(result.status,result.headers,result.body);
//                 console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
//             });
//     }
//     if(data == 4){ 
//         unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=2KZ9MV9TBQDE4YRY") 
//             .end(function(result){
//                 console.log(result.status,result.headers,result.body);
//                 console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
//             }); 
//     }
//     if(data == 5){ 
//         unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&apikey=2KZ9MV9TBQDE4YRY") 
//             .end(function(result){
//                 console.log(result.status,result.headers,result.body);
//                 console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
//             });
//     }
//     if(data == 6){ 
//         unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=MSFT&apikey=2KZ9MV9TBQDE4YRY") 
//             .end(function(result){
//                 console.log(result.status,result.headers,result.body);
//                 console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
//             });
//     }
//     if(data == 7){ 
//         unirest.get("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=demo") 
//             .end(function(result){
//                 console.log(result.status,result.headers,result.body);
//                 console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
//             }); 
//     }
//     if(data == 8){ 
//         unirest.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=2KZ9MV9TBQDE4YRY") 
//             .end(function(result){
//                 console.log(result.status,result.headers,result.body);
//                 console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
//             });
//     }
//     if(data == 9){  
//         unirest.get("https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=2KZ9MV9TBQDE4YRY") 
//             .end(function(result){
//                 console.log(result.status,result.headers,result.body);
//                 console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
//             });
//     }  
//     if(data == 10){ 
//         unirest.get("https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=2KZ9MV9TBQDE4YRY") 
//             .end(function(result){
//                 console.log(result.status,result.headers,result.body);
//                 console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
//             });
//     }
//     if(data == 11){ 
//         unirest.get("https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&apikey=2KZ9MV9TBQDE4YRY") 
//             .end(function(result){
//                 console.log(result.status,result.headers,result.body);
//                 console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
//             });
//     }
//     if(data == 12){ 
//         unirest.get("https://www.alphavantage.co/query?function=FX_WEEKLY&from_symbol=EUR&to_symbol=USD&apikey=2KZ9MV9TBQDE4YRY") 
//             .end(function(result){
//                 console.log(result.status,result.headers,result.body);
//                 console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
//             }); 
//     }
//     if(data == 13){ 
//         unirest.get("https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=EUR&to_symbol=USD&apikey=2KZ9MV9TBQDE4YRY")
//             .end(function(result){
//                 console.log(result.status,result.headers,result.body);
//                 console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
//             });
//     }
//     if(data == 14){
//         unirest.get("https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CAD&apikey=2KZ9MV9TBQDE4YRY")
//             .end(function(result){
//                 console.log(result.status,result.headers,result.body);
//                 console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
//             });
//     }
//     if(data == 15){
//         unirest.get("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CAD&apikey=2KZ9MV9TBQDE4YRY")
//             .end(function(result){
//                 console.log(result.status,result.headers,result.body);
//                 console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
//             });
//     }
//     if(data == 16){
//         unirest.get("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=CAD&apikey=2KZ9MV9TBQDE4YRY")
//             .end(function(result){
//                 console.log(result.status,result.headers,result.body);
//                 console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
//             });
//     }
//     if(data == 17){
//         unirest.get("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=CAD&apikey=2KZ9MV9TBQDE4YRY")
//             .end(function(result){
//                 console.log(result.status,result.headers,result.body);
//                 console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
//             });
//     }
//     if(data == 18){
//         process.exit();
//     }
// });


// unirest.post('https://apidojo-yahoo-finance-v1.p.rapidapi.com/')
//     .header("X-RapidAPI-Host", "apidojo-yahoo-finance-v1.p.rapidapi.com")
//     .header("X-RapidAPI-Key", "9a575ef679msh218b48d596f8a39p1edce4jsn9d83480fd74b")
//     .end(function (result) {
//        console.log(result.status, result.headers, result.body);
//     });

// unirest.put('https://apidojo-yahoo-finance-v1.p.rapidapi.com/')
//     .header("X-RapidAPI-Host", "apidojo-yahoo-finance-v1.p.rapidapi.com")    
//     .header("X-RapidAPI-Key", "9a575ef679msh218b48d596f8a39p1edce4jsn9d83480fd74b")
//     .end(function (result) {
//        console.log(result.status, result.headers, result.body);
//     });


// unirest.delete('https://apidojo-yahoo-finance-v1.p.rapidapi.com/')
//     .header("X-RapidAPI-Host", "apidojo-yahoo-finance-v1.p.rapidapi.com")    
//     .header("X-RapidAPI-Key", "9a575ef679msh218b48d596f8a39p1edce4jsn9d83480fd74b")
//     .end(function (result){
//        console.log(result.status,result.headers,result.body);  
//     });

// unirest.patch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/')
//     .header("X-RapidAPI-Host", "apidojo-yahoo-finance-v1.p.rapidapi.com")   
//     .header("X-RapidAPI-Key", "9a575ef679msh218b48d596f8a39p1edce4jsn9d83480fd74b")
//     .end(function (result) {
//         console.log(result.status, result.headers, result.body);
//     });
   
// /**File uploading **/
// unirest.post('https://apidojo-yahoo-finance-v1.p.rapidapi.com/')
//     .header("X-RapidAPI-Host", "apidojo-yahoo-finance-v1.p.rapidapi.com")
//     .header("X-RapidAPI-Key", "9a575ef679msh218b48d596f8a39p1edce4jsn9d83480fd74b")
//     .header({'Content-Type': 'multipart/form-data'})
//     .field('parameter', 'value') // Form field
//     .attach('file', '/path/to/file') // Attachment
//     .end(function (result) {
//         console.log(result.status, result.headers, result.body);
//     });












