var fs = require('fs');

// Get the files in current directory
// before deletion
//getFilesInDirectory();

// Delete example_file.txt
fs.unlink("combinacion.txt", (err => {
    if (err) console.log(err);
    else {
        console.log("\nDeleted file: combinacion.txt");
    }
}));
