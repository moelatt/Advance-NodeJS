let http = require('http');

let port = 3000;

let server = http.createServer(function(req, res){
               res.writeHead(200, {'Content-Type': 'text/html'});
               res.end("Hello world");
            })

server.listen(port, ()=>{
   console.log(`Server is running in port ${port}`) //  doing with string interpolation ${}
})