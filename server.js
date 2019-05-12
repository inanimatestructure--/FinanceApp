/**essentially a routing system */
var unirest = require('unirest');

/**
 * API KEY: ---->  9a575ef679msh218b48d596f8a39p1edce4jsn9d83480fd74b
 *
 * IF NEEDED---------------------
 * API-HOST: ----> apidojo-yahoo-finance-v1.p.rapidapi.com
 *  **/
unirest.post(API_URL)
    .header("X-RapidAPI-Key", "9a575ef679msh218b48d596f8a39p1edce4jsn9d83480fd74b")
    .end(function(result){
        console.log(result.status,result.headers,result.body);
    });

   
unirest.get()