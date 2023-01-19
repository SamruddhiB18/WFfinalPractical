//Q.Create a node.js file that Insert Multiple Records in  "student" table, and display the result object on console 
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "",
    database: "college"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO student (name, rollno) VALUES ('Prathamesh Mengade', '29'), ('Sanket Dhanve', '41'), ('Somnath Bhoite', '46')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(" record inserted");
  });
});
