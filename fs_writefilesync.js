// Node.js program to demonstrate the fs.writeFileSync() method

// Import the filesystem module
const fs = require('fs');

let data = "This is a file containing a collection" + " of programming languages.\n" + "1. JavaScript\n2. C++\n3. Python";

fs.writeFileSync("programming.txt", data);
console.log("File written successfully\n");
console.log("The written has the following contents:");
console.log(fs.readFileSync("programming.txt", "utf8"));
