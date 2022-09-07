const fs = require('fs')
const fileName = "text.txt"
const stream = new fs.WriteStream(fileName, {encoding: 'utf-8'});
console.log("Input some text:")
const inputData = process.stdin;

inputData.setRawMode(true)
inputData.resume()
inputData.setEncoding('utf8')

inputData.on( 'data', function (key){
    if ( key === '\u0003' ) {
        stream.on('finish', () => console.log('Done'));
        stream.end();
        process.exit();
    }
    process.stdout.write( key );
    stream.write(key);
});

stream.on('error', (err) => console.log(`Err: ${err}`));