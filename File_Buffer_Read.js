let fs = require('fs');

let readStr = fs.createReadStream('test.txt') // without utf-8 will get buffer value

readStr.on('data', function(chunk){
   console.log("We got buffer chunk")
   console.log(chunk);
})
// readStr.emit('data')