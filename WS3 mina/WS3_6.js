var http = require("http");
// Otetaan axios-moduuli käyttöön
var axios = require("axios");
// Luodaan AJAX-kysely ja lähetetään pyyntö

http
    .createServer(function (request, response) {
        response.writeHead(200, { "Content-Type": "text/html" });
        const promise = axios
            .get("http://www.omdbapi.com/?s=batman&apikey=a515b9b8")
            // Käsitellään vastaus kun se saapuu
            .then(res => {
                const tieto = parse(res.data)
                response.writeHead(200, { 'content-type': 'text/html' })
                //console.log(data);
                response.end(tieto)
            })
            .catch(err => {
                // Handle error if axios fetching fails
                response.writeHead(500, { 'content-type': 'text/plain' })
                response.end('Ongelmia ;/')
            })
    })
    .listen(8801);

function parse(data) {
    var html = "<table border='1'>";
    for (var i = 0; i < data.Search.length; i++) {
        html += "<tr>";
        html += "<td>" + data.Search[i].Title + "</td>";
        html += "<td>" + data.Search[i].Type + "</td>";
        html += "<td>" + data.Search[i].Year + "</td>";
        html += "<td><img src='" + data.Search[i].Poster + "'></td></td>";
        //  html += "<td>" + data.Search[i].Poster + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    return html;
}