var fs = require('fs');
var json = require("./data.json");
//luodaan json taulukko
var homma = "<table border='1'>";
for (var i = 0; i < json.length; i++) {
    homma += "<tr>";
    homma += "<td>" + json[i].name + "<td>";
    homma += "<td>" + json[i].age + "<td>";
    homma += "<td>" + json[i].company + "<td>";
    homma += "<td>" + json[i].address + "<td>";
    homma += "</tr>";
};
homma += "</table>";
console.log(homma);