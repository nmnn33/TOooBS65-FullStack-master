var http = require("http");
var json = require("./dataset.json");

http
    .createServer(function (request, response) {
        response.writeHead(200, { "Content-Type": "text/json" });
        response.end(JSON.stringify(json));
    })
    .listen(8801);
