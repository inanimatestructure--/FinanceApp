
var unirest = require('unirest');
var URLS = new Object();
var API_HOST = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/";
var query  = new Array('whatever you want');

URLS.getSummary = "market/get-summary?region=US&lang=en";
URLS.getMovers = "market/get-movers?region=US&lang=en";
URLS.getQuotes = "market/get-quotes?region=US&lang=en&symbols=BAC%2CKC%3DF%2C002210.KS%2CIWM%2CAMECX";
URLS.getCharts = "market/get-charts?region=US&lang=en&symbol=HYDR.ME&interval=5m&range=1d";
URLS.getAutoComplete = "market/auto-complete?lang=en&region=en&query=" + query[0];
URLS.getStockDetail = "stock/get-detail?region=US/lang=en&symbol=NBEV";
URLS.getStockHistories = "stock/get-histories?region=US&lang=en&symbol=NBEV&from=1231866000&to=1547524844&events=div&interval=1d";
URLS.getStockNews = "stock/get-news?region=US&category=NBEV";

const readline = require('readline').createInterface({
    input : process.stdin,
    output: process.stdout
})

readline.question('What stock market data do you want to see?\n1.Summary\n2.Movers\n3.Quotes\n4.Charts\n5.', (marketData) => {
    console.log('${ market }');
});

 

/**
 * API KEY: ---->  9a575ef679msh218b48d596f8a39p1edce4jsn9d83480fd74b
 *
 * IF NEEDED---------------------
 * API-HOST: ----> https://apidojo-yahoo-finance-v1.p.rapidapi.com/
 *  **/

function stringAppend(a,b){
    return Buffer.concat([a,b]);
}

unirest.get(stringAppend(API_HOST,MARKET_URLS.getSummary))
    .header("X-RapidAPI-Host", "apidojo-yahoo-finance-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "9a575ef679msh218b48d596f8a39p1edce4jsn9d83480fd74b")
    .end(function(result){
        console.log(result.status,result.headers,result.body);
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












