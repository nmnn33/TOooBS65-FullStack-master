// luodaan filesystem-moduuli ohjelmaan
var fs = require("fs");
try {
var data = fs.readFileSync('uusifile.txt');

console.log("Luettu tekstistä:");
console.log(data.toString());
} catch (err) {
    console.log("vika ;((" + err);
}