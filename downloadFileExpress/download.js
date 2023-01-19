//Q.Write node js application that enables the user to download file and save it locally. 
var express = require('express');
var app = express();
var PORT = 3000;

app.get('/', function(req, res){
    res.download('Hello.txt');
});

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

