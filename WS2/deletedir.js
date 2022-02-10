// Node.js program to demonstrate the   
// fs.mkdir() Method

// Include fs and path module
const fs = require('fs');

//Delete dir newdata
fs.rmdir("newdata", () => {
    console.log("Folder Deleted!");
});
