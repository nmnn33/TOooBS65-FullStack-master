// Node.js program to demonstrate the
// fs.readdirSync() method

// Import the filesystem module
const fs = require('fs');

// Function to get current filenames
// in directory
filenames = fs.readdirSync(__dirname);

console.log("\nCurrent directory filenames:");
filenames.forEach(file => {
    console.log(file);
});