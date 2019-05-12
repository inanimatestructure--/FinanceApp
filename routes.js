
var unirest = require('unirest');
import * as urls from './urls.json';
const {name} = urls;
console.log(name);

var urlReadIn = prompt("Pick a number between 1 and 100", "");
/**
 * GRAPHING API
 * 
 * require('plotly')(username,api_key);
 * 
 * API KEY ---> 2KZ9MV9TBQDE4YRY (for me... get your own)
 * **/

function stringAppend(a,b){
    return a + b;
}

function realTimeStockTimeSeries(){
    unirest.get("")
        .end(function(result){
            console.log(result.status,result.headers,result.body);
        });

    unirest.get("")
        .end(function(result){
            console.log(result.status,result.headers,result.body);
        });

    unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey="+API_KEY)
        .end(function(result){
            console.log(result.status,result.headers,result.body);
        });
    
    unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&outputsize=compact&apikey="+API_KEY)
        .end(function(result){
            console.log(result.status,result.headers,result.body);
        });
}




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












