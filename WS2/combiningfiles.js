var fs = require('fs');

//Lisätään tekstiä
fs.writeFileSync("combinacion.txt", "");
var data2 = fs.readFileSync("teksti.txt"); //Lisätään teksti.txt combinacion.txt
var data3 = fs.readFileSync("teskti2.txt"); //Lisätään teksti2.txt combinacion.txt
fs.writeFileSync("combinacion.txt", data2 + data3); //combinacion
fs.appendFileSync('combinacion.txt', "\n wahahahahah !!!"); //combanicion loppuun tesktiä
console.log("homma hoidettu!");
