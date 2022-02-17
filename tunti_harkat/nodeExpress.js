// Otetaan express-moduuli käyttöön
var express = require("express");
var app = express();

// Luodaan reitit ja niiden toiminnallisuudet
app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get("/list", function (req, res) {
    res.send("Listing data from a file!");
});

// Oletusreitti joka tarjoillaan, mikäli muihin ei päädytty.
app.get("*", function (req, res) {
    res.send("Cant find the requested page", 404);
});

// Web-palvelimen luonti Expressin avulla
app.listen(8081, function () {
    console.log("Example app listening on port 8081!");
});
