var fs = require('fs');

console.log("Seurataan...");
//asyncroninen readFile komento
var data = fs.readFile('uusifile.txt', function(err, data){
    if(err) {
        console.log("Tapahtui virhe!");
    }
    console.log("Lueattua tiedosto:\n");
    console.log(data.toString());
});
//Tulostetaan ja katsotaan, mitä tulostetaan ja missä järjestyksessä
for (var i =0; i < 10; i++) {
    console.log("Tulostetaan rivi tiedoston sisältöä odotellessa... " + i);
}