let nodePath = process.argv[0]
let scriptPath = process.argv[1]
let fileName = process.argv[2]

let fs = require('fs');

//fs.ReadStream наследует от stream.Readable
let stream = new fs.ReadStream(fileName, {encoding: 'utf-8'});

stream.on('readable', function(){
    let data = stream.read();
    console.log(data);
});

stream.on('end', function(){
    console.log("THE END");
});