
var unirest = require('unirest');
var API_KEY = "2KZ9MV9TBQDE4YRY";
 
/**
 * GRAPHING API
 * 
 * require('plotly')(username,api_key);
 * 
 * **/

function stringAppend(a,b){
    return a + b;
}

unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=MSFT&apikey="+API_KEY)
    .end(function(result){
        console.log(result.status,result.headers,result.body);
    });

unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=MSFT&apikey="+API_KEY)
    .end(function(result){
        console.log(result.status,result.headers,result.body);
    });

unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=MSFT&apikey="+API_KEY)
    .end(function(result){
        console.log(result.status,result.headers,result.body);
    });

unirest.get("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=MSFT&apikey="+API_KEY)
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












