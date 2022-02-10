var fs = require('fs');

// Delete example_file.txt
fs.unlink("combinacion.txt", (err) => {
    if (err) console.log(err);
    else {
        console.log("\nDeleted file: combinacion.txt");
    }
});
