const PORT = process.env.PORT || 8801;

var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./public"));

app.post("/kirjaudu", function (req, res) {
});

app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
});