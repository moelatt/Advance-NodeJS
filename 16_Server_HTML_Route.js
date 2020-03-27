let http = require('http');
let fs = require('fs');

let port = 3000;


let server = http.createServer((req, res)=>{
   if(req.url === '/' || req.url === '/index' || req.url === '/home'){
      res.writeHead(200, {'Content-Type': 'text/html'})
      let readstr = fs.createReadStream('./HTML/index.html', 'utf-8');
      readstr.pipe(res);
   }
   else if(req.url === '/about'){
      res.writeHead(200, {'Content-Type' : 'text/html'})
      let readstr = fs.createReadStream('./HTML/About.html', 'utf-8');
      readstr.pipe(res)
   }
   else if(req.url === '/api/JSON'){
      let obj = {
         name: "Mg Mg",
         age : 23,
         major: "Web developer",
         sibling: {
            brother: "Kyaw Kyaw",
            Sister: "Su Su"
         }
      }
      res.end(JSON.stringify(obj));
   }
})

server.listen(port, function(){
   console.log(`Server is running at port ${port}`)
})