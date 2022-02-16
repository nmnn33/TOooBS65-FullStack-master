var express = require("express");
var fs = require("fs");
var app = express();

// Require the module required for using form data
var bodyParser = require("body-parser");


// create application/x-www-form-urlencoded parser
app.use(
    bodyParser.urlencoded({
        extended: true
    })
); // for parsing application/x-www-form-urlencoded

// Serve browser a form (HTML) from a file
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/HTMLform.html");
});


app.listen(8081, function () {
    console.log("Example app listening on port 8081!");
});
