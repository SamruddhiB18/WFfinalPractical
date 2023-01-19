var events=require('events'); // Import events module  

var eventEmitter=new events.EventEmitter();// Create an eventEmitter object  

var connectHandler=function connected() // Create an event handler function
{
    console.log('Connection Successful');
    eventEmitter.emit('data recieved'); // Fire the data_received event  
}

eventEmitter.on('connection',connectHandler);// Bind the connection event with the handler  

eventEmitter.on('data recieved',function(){// Bind the data_received event with the anonymous function  
    console.log('data recieved sucessfuly');
});

eventEmitter.emit('connection');// Fire the connection event  
     
console.log("Program ended");