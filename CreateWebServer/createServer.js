//Q.Create a Simple Web Server using node js.
var http =require('http');

http.createServer(function(req,res){
    res.write("This is the response from server");
    res.end();
}).listen(3000);

console.log("Server created successfully");

