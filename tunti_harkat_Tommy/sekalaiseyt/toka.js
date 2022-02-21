//fs on tarpeen
var fs = require("fs");

var data = "The easiest shite";
//write luo datan, joka on tekstitiedosto ja nimeltään uusifile.txt
fs.writeFileSync('uusifile.txt', data);
//Lisätään tekstiä
fs.appendFileSync('uusifile.txt', "Lisätty on");

//fs.writeFileSync('uusifile.txt', "nigpper");
//Tuo komento poistaisi kaiken tekstin ja tulisi vain nigpper.