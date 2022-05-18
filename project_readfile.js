const fs = require('fs');
// const path = require('path');
const txtPath = '/Users/niveytha/Documents/My Documents/Internships/Keysight (Summer Internship)/Intern-Project/Sample_Logs/SampleInputFile.txt';

const data = fs.readFileSync(
    txtPath,
    {encoding:'utf8', flag:'r'});
 
// Display the file data
console.log(data);
