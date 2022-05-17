// Node.js program to demonstrate the fs.readdir() method

// Import the filesystem module
const fs = require('fs');
const path = require('path');

// Function to get current filenames in directory
fs.readdir(__dirname, (err, files) => {
    if (err)
        console.log(err);
    else {
        console.log("\nCurrent directory filenames:");
        files.forEach(file => {
            if (path.extname(file) == ".js")
                console.log(file);
        })
    }
})

// Function to get current filenames in directory with "withFileTypes" set to "true"
fs.readdir(__dirname, { withFileTypes: true }, (err, files) => {
console.log("\nCurrent directory files:");
    if (err)
        console.log(err);
    else {
        files.forEach(file => {
            console.log(file);
        })
    }
})