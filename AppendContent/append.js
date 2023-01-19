//Q. Create a node.js file that opens the requested file and appends the given content to the file.
var fs = require('fs');

fs.appendFile('a.txt',"This is new content!", function(err){
    if(err) throw err;
    console.log('Saved!');
});