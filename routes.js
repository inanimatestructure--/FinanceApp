

var plotly = require('plotly')('jakehollis425','71jKm0ZEjaalP0OfkPV3');
var unirest = require('unirest');

/***I'LL  FIND SOME USE FOR THIS LATER ***/
// var data=fs.readFileSync('urls.json', 'utf8');
// var words=JSON.parse(data);

// Get process.stdin as the standard input object.
var readline = process.stdin;
readline.setEncoding('utf-8');

console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");

readline.on('data', function (data) {
    if(data == 0){ 
        unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&outputsize=compact&apikey=2KZ9MV9TBQDE4YRY") 
            .end(function(result){
                console.log(result.status,result.headers,result.body);
                console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
            });
    }
    if(data == 1){ 
        unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=2KZ9MV9TBQDE4YRY") 
            .end(function(result){
                console.log(result.status,result.headers,result.body);
                console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
            });
    }
    if(data == 2){ 
        unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=2KZ9MV9TBQDE4YRY") 
            .end(function(result){
                console.log(result.status,result.headers,result.body);
                console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
            });
    }
    if(data == 3){ 
        unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&apikey=2KZ9MV9TBQDE4YRY") 
            .end(function(result){
                console.log(result.status,result.headers,result.body);
                console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
            });
    }
    if(data == 4){ 
        unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=2KZ9MV9TBQDE4YRY") 
            .end(function(result){
                console.log(result.status,result.headers,result.body);
                console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
            }); 
    }
    if(data == 5){ 
        unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&apikey=2KZ9MV9TBQDE4YRY") 
            .end(function(result){
                console.log(result.status,result.headers,result.body);
                console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
            });
    }
    if(data == 6){ 
        unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=MSFT&apikey=2KZ9MV9TBQDE4YRY") 
            .end(function(result){
                console.log(result.status,result.headers,result.body);
                console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
            });
    }
    if(data == 7){ 
        unirest.get("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=demo") 
            .end(function(result){
                console.log(result.status,result.headers,result.body);
                console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
            }); 
    }
    if(data == 8){ 
        unirest.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=2KZ9MV9TBQDE4YRY") 
            .end(function(result){
                console.log(result.status,result.headers,result.body);
                console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
            });
    }
    if(data == 9){  
        unirest.get("https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=2KZ9MV9TBQDE4YRY") 
            .end(function(result){
                console.log(result.status,result.headers,result.body);
                console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
            });
    }  
    if(data == 10){ 
        unirest.get("https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=2KZ9MV9TBQDE4YRY") 
            .end(function(result){
                console.log(result.status,result.headers,result.body);
                console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
            });
    }
    if(data == 11){ 
        unirest.get("https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&apikey=2KZ9MV9TBQDE4YRY") 
            .end(function(result){
                console.log(result.status,result.headers,result.body);
                console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
            });
    }
    if(data == 12){ 
        unirest.get("https://www.alphavantage.co/query?function=FX_WEEKLY&from_symbol=EUR&to_symbol=USD&apikey=2KZ9MV9TBQDE4YRY") 
            .end(function(result){
                console.log(result.status,result.headers,result.body);
                console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
            }); 
    }
    if(data == 13){ 
        unirest.get("https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=EUR&to_symbol=USD&apikey=2KZ9MV9TBQDE4YRY")
            .end(function(result){
                console.log(result.status,result.headers,result.body);
                console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
            });
    }
    if(data == 14){
        unirest.get("https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CAD&apikey=2KZ9MV9TBQDE4YRY")
            .end(function(result){
                console.log(result.status,result.headers,result.body);
                console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
            });
    }
    if(data == 15){
        unirest.get("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CAD&apikey=2KZ9MV9TBQDE4YRY")
            .end(function(result){
                console.log(result.status,result.headers,result.body);
                console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
            });
    }
    if(data == 16){
        unirest.get("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=CAD&apikey=2KZ9MV9TBQDE4YRY")
            .end(function(result){
                console.log(result.status,result.headers,result.body);
                console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
            });
    }
    if(data == 17){
        unirest.get("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=CAD&apikey=2KZ9MV9TBQDE4YRY")
            .end(function(result){
                console.log(result.status,result.headers,result.body);
                console.log("Stocks (0-9), \nForex (10-13) \nCryptocurrencies (14-17) \nPress 18 to exit:");
            });
    }
    if(data == 18){
        process.exit();
    }
});


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












