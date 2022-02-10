var fs = require('fs');

//Lueataan dataa
var data = fs.readFileSync("teksti.txt");
var data2 = fs.readFileSync("teskti2.txt")
console.log("tiedostoa lueataan");
console.log(data.toString());
console.log(data2.toString());
console.log("Loppu tiedoston luku.");


