
var unirest = require('unirest');
var fs = require('fs');
var data=fs.readFileSync('urls.json', 'utf8');
var words=JSON.parse(data);

// Get process.stdin as the standard input object.
var input = process.stdin;
input.setEncoding('utf-8');
console.log("Please input text in command line:");

input.on('data', function (data) {
    if(data === 'exit'){
        console.log("User input complete, program exit.");
        process.exit();
    }
    else{
        console.log('User Input Data : ' + data);
        realTimeStockTimeSeries(words); 
    }
});

/**
 * GRAPHING API - MAYBE AT SOME POINT
 * 
 * require('plotly')(username,api_key);
 * 
 * API KEY ---> 2KZ9MV9TBQDE4YRY (for me... get your own)
 * **/



function realTimeStockTimeSeries(words, adata){
    /**INTRA DAY*/
    unirest.get(words.stock_real_time_series.daily) 
        .end(function(result){
            console.log(result.status,result.headers,result.body);
        });
}

function forexStockDetails(words){
    unirest.get(words)
        .end(function(result){
            console.log(result.status,result.headers,result.body);
        });
}

function cryptocurrencyStockDetails(words){
    unirest.get(words)
        .end(function(result){
            console.log(result.status,result.headers,result.body);
        });
}

function technicalIndicators(words){
    unirest.get(words)
        .end(function(result){
            console.log(result.status,result.headers,result.body);
        });
}

function sectorPerformances(words){
    unirest.get(words)
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












