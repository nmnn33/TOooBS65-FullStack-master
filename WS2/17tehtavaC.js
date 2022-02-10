var http = require("http");
var json = require("./data.json");

http
    .createServer(function (request, response) {
        response.writeHead(200, { "Content-Type": "text/html" });
        //luodaan json taulukko
        var homma = "<table border='1'>";
        for (var i = 0; i < json.length; i++) {
            homma += "<tr>";
            homma += "<td>" + json[i].name + "</td>";
            homma += "<td>" + json[i].age + "</td>";
            homma += "<td>" + json[i].company + "</td>";
            homma += "<td>" + json[i].address + "</td>";
            homma += "</tr>";
        };
        homma += "</table>";
        response.write(homma);
        response.end();
    })
    .listen(8801);
