//Q.Create a Simple Web Server using node js to print today’s date on the browser.
var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Todays Date: \n'+Date());
}).listen(8000);

console.log("Date displayed at localhost:8000");