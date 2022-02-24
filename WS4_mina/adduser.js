const PORT = process.env.PORT || 8801

//Otetaan moduulit käyttöön
var express = require('express');
var fs = require('fs');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/details', function (req, res) {
    var data = require('./exampledata2.json');

    var results = '<table border="2"> ';
    for (var i = 0; i < data.length; i++) {
        results +=
            '<tr>' +
            '<td>' + data[i].Name + '</td>' +
            '<td>' + data[i].Email + '</td>' +
            '</tr>';
    }
    res.send(results);
});

app.get('/adduser', function (req, res) {
    res.sendFile(__dirname + '/public/adduser.html');
});

app.post('/adduser', function (req, res) {

    var data = require('./exampledata2.json');

    data.push({
        "Name": req.body.name,
        "Company": req.body.company,
        "Email": req.body.email,
        "Date": new Date()
    });

    var jsonStr = JSON.stringify(data);

    fs.writeFile('exampledata2.json', jsonStr, (err) => {
        if (err) throw err;
        console.log('It\'s saved!');
    });

    res.send("Saved the data to a file. Browse to the /details to see the contents of the file.");
});


app.get('*', function (req, res) {
    res.send('cant find the rquessted page...', 404);
});

app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
});