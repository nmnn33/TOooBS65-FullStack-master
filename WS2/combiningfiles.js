var fs = require('fs');

//Lisätään tekstiä
var data = fs.writeFileSync("combinacion.txt", "");
var data2 = fs.readFileSync("teksti.txt"); //Lisätään teksti.txt combinacion.txt
var data3 = fs.readFileSync("teskti2.txt"); //Lisätään teksti2.txt combinacion.txt
fs.writeFileSync("combinacion.txt", data2 + data3); //combinacion
fs.appendFileSync('combinacion.txt', "\nI wrote this!");
var luku = fs.readFileSync('combinacion.txt');
console.log(luku.toString());
