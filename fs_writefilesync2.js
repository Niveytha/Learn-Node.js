// !Taking runtime input from users for file name and file data using readline module

var readline = require('readline-sync');
var fs = require("fs");
	
var path = readline.question("Enter file name/path: ");
console.log("Entered path : " + path);

var data = readline.question("Enter file data: ");
// OR
// // 1024 specifies the buffer size -> we can limit the data size by this approach
// var buf = new Buffer.alloc(1024);
// buf = readline.question("Enter data:");

// synchronous functions may throw errors which can be handled using try-catch block
try {
    fs.writeFileSync(path, data,{flag:'a+'}); //'a+' is append mode
    console.log("File written successfully");
} catch(err) {
    console.error(err);
}
console.log("-----------------------------------------------");

try{
    const data = fs.readFileSync(path,{encoding: "utf8"});
    console.log("File content is as follows:");
    // Display the file data
    console.log(data);
} catch(err){
    console.log(err);
}
