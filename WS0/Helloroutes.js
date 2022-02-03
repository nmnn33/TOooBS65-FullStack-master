var http = require("http");

//create a server object:
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/HTML" });
    //Polku ehdot. localhost:/helloworld tuottaa ensimmäisen ja localhost:/homepage toisen if skenaarion.
    if (request.url === "/helloworld") {
        response.write("<h1>Helloworld</h1>");
    }
    else if (request.url === "/homepage"){
        response.write("<h1>HOMEPAGE</h1>");
    } 
    response.write("<p>Chill ngha</p>");
    response.end("<strong>This is the end</strong>"); //end the response
  })
  .listen(8081); //the server object listens on port 8080
console.log("serveri käynnissä osoitteessa https://127.0.0.1.8081.");
