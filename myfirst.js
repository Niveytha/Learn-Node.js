var http = require('http'); // includes http module
var dt = require('./myfirstmodule');

// creates a HTTP server
http.createServer(function (req, res) {  // req -> request
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end('<br/>Hello World!');
  // how to new line?
}).listen(8080);