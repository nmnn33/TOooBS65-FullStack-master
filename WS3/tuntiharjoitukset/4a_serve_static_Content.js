var express = require('express');
var fs = require('fs');
var app = express();

// Serve static files from the "public" directory
app.use(express.static("./public"));

app.get('/', function (req, res) {
    res.sendFile('/public/index.html');
});

app.get('/details', function (req, res) {

    var data = require(__dirname + '/data/exampledata2.json');

    var results = '<table border="1"> ';

    for (var i = 0; i < data.length; i++) {
        results +=
            '<tr>' +
            '<td>' + data[i].Name + '</td>' +
            '<td>' + data[i].Email + '</td>' +
            '</tr>';
    }

    res.send(results);
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
