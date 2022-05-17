var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    // response from HTTP server should be displayed as HTML
    // (arguments): status code, response header
    res.writeHead(200, {'Content-Type': 'text/html'}); // HTTP header

    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080