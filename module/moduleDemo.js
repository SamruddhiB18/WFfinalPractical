var http = require('http');
var dt = require('./modules');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Current Date and Time: " + dt.myDateTime());
  res.end();
}).listen(8080);
