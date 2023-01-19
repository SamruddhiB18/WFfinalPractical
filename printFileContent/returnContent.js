//Q.Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error.

var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('f1.txt',function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            res.end("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);