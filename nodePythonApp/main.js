const express = require('express')
const {spawn} = require('child_process');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // !script1 & script2
    // var dataToSend;

    // // spawn new child process to call the python script
    // // const python = spawn('python3', ['python_scripts/script1.py']);
    // const python = spawn('python3', ['python_scripts/script2.py','node.js','python']);

    // // collect data from script
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');

    //     // convert the buffer data to a readable form
    //     dataToSend = data.toString(); 
    // });

    // // in Close event we are sure that stream from child process is closed
    // python.on('close', (code) => {
    //     console.log(`child process close all stdio with code ${code}`);
    //     res.send(dataToSend) // send data to browser
    // });

    // !script3
    var largeDataSet = [];

    // spawn new child process to call the python script
    // const python = spawn('python3', ['python_scripts/script1.py']);
    const python = spawn('python3', ['python_scripts/script3.py','node.js','python']);

    // collect data from script
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        largeDataSet.push(data);
    });

    // in Close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        res.send(largeDataSet.join("")) // send data to browser
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))