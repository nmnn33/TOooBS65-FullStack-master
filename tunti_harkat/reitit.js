var http = require("http");
var fs = require('fs');

//create a server object:
http
  .createServer(function(request, response) {
    //Polku ehdot. localhost:/helloworld tuottaa ensimmäisen ja localhost:/homepage toisen if skenaarion.
    if (request.url === "/") {
        response.writeHead(200, { "Content-Type": "text/HTML" });
        response.write("<h1>moi</h1>");
    }
    else if (request.url === "/homepage"){
        response.writeHead(200, { "Content-Type": "text/HTML" });
        //Luetaan etusivu.html
        var html = fs.readFileSync('./etusivu.html');
        response.write(html);
    }
    else if (request.url === "/json"){
        response.writeHead(200, { "Content-Type": "text/HTML" });
        response.write("EI vielä Jsonia");
    }
    else {
        response.writeHead(200, {"Content-type": "text/plain"})
        response.write("<h1>HOMEPAGE?!?!?</h1>");
    }
    response.end(); //end the response
  })
  .listen(8081); //the server object listens on port 8080
console.log("serveri käynnissä osoitteessa https://127.0.0.1.8081.");
