var fs = require('fs');
var json = require("./data.json");
//adding this
var newstuff = {
    name: 'John Doe',
    age: '52',
    company: 'Laurea',
    address: 'Ratatie 22'
};
//pushing to my json
json.push(newstuff);
console.log(json);
var data = JSON.stringify(json);
fs.writeFileSync("dataset.json", data);