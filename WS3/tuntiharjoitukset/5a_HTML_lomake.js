var express = require("express");
var fs = require("fs");
var app = express();

// Require the module required for using form data
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

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

// Uusi POST-tyyppiseen sivupyyntöön reagoiva reitti
app.post("/kirjaudu", function (req, res) {
    console.log(req.body);
    var email = req.body.email;
    var pass = req.body.pass;
    // Jos tunnukset ovat oikeat, ohjataan käyttäjä uuteen reittiin
    if (email === "onni@sci.fi" && pass === "opiskelija") {
        res.redirect("/userpage");
    }
    res.send("Lähetit lomakkeen! Email: " + email + " Salis: " + pass);
});

// Uusi reitti sisäänkirjautuneelle käyttäjälle.
app.get("/userpage", function (req, res) {
    res.send("You are now logged in!");
});

app.get("*", function (req, res) {
    res.send("Cant find the requested page", 404);
});



app.listen(8081, function () {
    console.log("Example app listening on port 8081!");
});
