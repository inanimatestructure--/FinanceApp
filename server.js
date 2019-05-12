
var unirest = require('unirest');

/**
 * API KEY: ---->  9a575ef679msh218b48d596f8a39p1edce4jsn9d83480fd74b
 *
 * IF NEEDED---------------------
 * API-HOST: ----> apidojo-yahoo-finance-v1.p.rapidapi.com
 *  **/


unirest.get('')
    .header("X-RapidAPI-Key", "9a575ef679msh218b48d596f8a39p1edce4jsn9d83480fd74b")
    .end(function(result){
        console.log(result.status,result.headers,result.body);
    });

unirest.post('')
    .header("X-RapidAPI-Key", "9a575ef679msh218b48d596f8a39p1edce4jsn9d83480fd74b")
    .end(function (result) {
       console.log(result.status, result.headers, result.body);
    });

unirest.put('')
    .header("X-RapidAPI-Key", "9a575ef679msh218b48d596f8a39p1edce4jsn9d83480fd74b")
    .end(function (result) {
       console.log(result.status, result.headers, result.body);
    });


unirest.delete('')
    .header("X-RapidAPI-Key", "9a575ef679msh218b48d596f8a39p1edce4jsn9d83480fd74b")
    .end(function (result){
       console.log(result.status,result.headers,result.body);  
    });

   
/**File uploading **/
unirest.post('')
    .header("X-RapidAPI-Key", "9a575ef679msh218b48d596f8a39p1edce4jsn9d83480fd74b")
    .header({'Content-Type': 'multipart/form-data'})
    .field('parameter', 'value') // Form field
    .attach('file', '/path/to/file') // Attachment
    .end(function (result) {
        console.log(result.status, result.headers, result.body);
    });









