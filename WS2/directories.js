// Node.js program to demonstrate the   
// fs.mkdir() Method

// Include fs and path module
const fs = require('fs');
const path = require('path');
//Create dir newdata

fs.mkdir(path.join(__dirname, 'newdata'), (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');
});

//Delete dir newdata
fs.rmdir("newdata", () => {
    console.log("Folder Deleted!");
});
