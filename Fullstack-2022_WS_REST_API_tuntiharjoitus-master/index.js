/* Otetaan express-moduuli käyttöön */
var express = require("express");
var app = express();
require("dotenv").config();

// Otetaan moduuli käyttöön
var mongoose = require("mongoose");
var uri = process.env.DB_URI;

// Yhdistetään tietokantaan
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const MovieSchema = new mongoose.Schema({

    title: String,
    year: Number,
    poster: String,
});
// Määritellään Schema, eli tietomalli.
const Movie = mongoose.model(
    "Movie",
    MovieSchema,
    "movies"  // HUOM. Kohdistetaan skeeman operaatiot tähän kokoelmaan
);

// Tämä tarvitaan lomakedatan lukemista varten
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// Luodaan reitit ja niiden toiminnallisuudet

/* Tulostetaan kaikki leffat */
app.get("/api/leffat", function (req, res) {
    Movie.find({}, null, { limit: 20 }, function (err, results) {
        /*     Jos tietokantahaussa tapahtuu virhe, palautetaan virhekoodi myös selaimelle */
        if (err) {
            res.json("Järjestelmässä tapahtui virhe", 500);
        }
        /*      Muuten lähetetään tietokannan tulokset selaimelle  */
        else {
            res.json(results, 200);
        }
    });
});

// Lisätään yksi leffa - huomaa POST-muuttujien lukeminen

app.post("/api/lisaa", function (req, res) {
    var nimi = req.body.title;
    var vuosi = req.body.year;
    var posteri = "https://www.lukuhetki.fi/tuotekuvat/product94037.jpg";

    const leffa = new Movie({
        title: nimi,
        year: vuosi,
        poster: posteri
    });
    console.log(leffa);
    leffa.save();

    res.send("Lisätään leffa: " + req.body.title + " (" + req.body.year + ")");
});

/* Muokataan leffan tietoja id-numeron perusteella. Huomaa ID-arvon lukeminen */
app.put("/api/muokkaa/:id", function (req, res) {


    var id = req.params.id;

    Movie.findByIdAndUpdate(id, { title: 'Tänne uusi nimi' }, function (err, results) {
        /*     Jos tietokantahaussa tapahtuu virhe, palautetaan virhekoodi myös selaimelle */
        if (err) {
            res.json("Järjestelmässä tapahtui virhe", 500);
        }
        /*      Muuten lähetetään tietokannan tulokset selaimelle  */
        else {
            res.json("Muokattiin leffaa id:llä: " + req.params.id + " nimeltään: " + results.title);
        }
    });
});

/* Poistetaan leffa id:n perusteella. Huomaa ID-arvon lukeminen  */

app.delete("/api/poista/:id", function (req, res) {
    // Poimitaan id talteen ja välitetään se tietokannan poisto-operaatioon
    var id = req.params.id;

    Movie.findByIdAndDelete(id, function (err, results) {
        /*         Tietokantavirheen käsittely  */
        if (err) {
            console.log(err);
            res.json("Tietokantajärjestelmävirhe. Yritä hetken kuluttua uudestaa...", 500);
        }
        /*       Tietokanta ok, mutta poistettavaa ei löydy. Onko kyseessä virhe vai ei on semantiikkaa */
        else if (results == null) {
            res.json("Poistetavaa dokumenttia ei löytynyt.", 200);
        } // Viimeisenä tilanne jossa kaikki ok
        else {
            console.log(results);
            res.json("Deleted " + id + " " + results.title, 200);
        }
    });
});

// Web-palvelimen luonti Expressin avulla
app.listen(8081, function () {
    console.log("Kuunnellaan porttia 8081!");
});
