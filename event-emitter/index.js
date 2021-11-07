const Emitter = require("events");

let emitter = new Emitter();

emitter.on('hello', function(){
    console.log("Hello all!");
});

emitter.on('bye', function(){
    console.log("Good bye");
});

emitter.emit('hello');