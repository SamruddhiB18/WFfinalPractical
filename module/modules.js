//Q. Write node js script to build Your Own Node.js Module.
// Use require (‘http’) module is a built-in Node module that invokes the functionality of the HTTP library to create a local server.
// Also use the export statement to make functions in your module available externally.
// Create a new text file to contain the functions in your module called, “modules.js” and add this function to return today’s date and time. 

exports.myDateTime = function () {
    return Date();
  };
  