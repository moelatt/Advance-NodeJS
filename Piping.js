let fs = require('fs');

let readStr = fs.createReadStream('test.txt', 'utf8');
let writeStr = fs.createWriteStream('test2.txt');

readStr.on('data', function(chunk){
   // writeStr.write(chunk)
   readStr.pipe(writeStr);

})
// readStr.emit('data')