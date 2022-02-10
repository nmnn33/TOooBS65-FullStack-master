var fs = require('fs');
var json = require("./dataset.json");

json.pop(); //Poistaa viimeisen indexissä olevan
console.log(json);