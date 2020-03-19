let http = require('http');
let fs = require('fs');
let port = 3000;
let read_data = fs.createReadStream('test.txt', 'utf-8');

let server = http.createServer(function(req, res){
   res.writeHead(200, {'Content-Type': 'text/html'})
   read_data.pipe(res);
})

server.listen(port, function(){
   console.log(`Server is runing at port ${port}`)
} )