//Tämä on itse tehty, testi juttu

var http = require("http");
//create a server object
http
    .createServer(function(request, response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello world!\n"); //write a response to client
        response.end("Zääää END!!"); //end the response
    })
    .listen(8081); //the server object listens on port 8081node