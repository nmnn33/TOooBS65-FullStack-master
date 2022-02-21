var http = require("http");
var fs = require('fs');

http
    .createServer(function (request, response) {
        if (request.url === "/") {
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.write("Nothing here to see");
        }
        else if (request.url === "/frontpage") {
            response.writeHead(200, { "Content-Type": "text/html" });
            var sivu = fs.readFileSync('frontpage.html');
            response.write(sivu);
        }
        else if (request.url === "/contact") {
            response.writeHead(200, { "Content-Type": "text/html" });
            var sivu = fs.readFileSync('contact.html');
            response.write(sivu);
        }
        else if (request.url === "/plaintext") {
            response.writeHead(200, { "Content-Type": "text/plain" });
            var sivu = fs.readFileSync('teksti.txt');
            response.write(sivu);
        }
        else if (request.url === "/json") {
            response.writeHead(200, { "Content-Type": "text/json: charset-UTF-8" });
            var json = require("./data.json");
            console.log(json[0].name);
            response.write(JSON.stringify(json));
        }
        response.end(); //end the response
    })
    .listen(8081); //the server object listens on port 8080
console.log("serveri pystyssä .....");