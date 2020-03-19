let express = require('express');
let http = require('http')
let fs = require('fs');
let app = express();


app.get('/', function(req, res){
   res.send('Home Page')
})

app.get('/about', function(req, res){
   let read_data = fs.createReadStream('./HTML/About.html', 'utf-8');
   res.writeHead(200, {'Content-Type' : 'text/html'});
   read_data.pipe(res);
})
app.get('/api/JSON', function(req, res){
   let obj = {
      name : "Mg Mg",
      age: 23,
      sibling: {
         brothers: "kaung kaung",
         sister: "Su Su"
      }
   }
   res.send(JSON.stringify(obj));
})
let start = (req, res)=>{
   res.writeHead(200, {'Content-Type' : 'text/html'})
   if(req.method == 'GET'){
      res.end('<h1> Hello from HTTP server page <h1>')
   }
   else if(req.method == "POST"){
      res.end('Request From Post Method')
   }
}
let Server = http.createServer(start);

Server.listen(2000, function(){
   console.log("server is running at port 2000");
})
app.listen(3000, ()=>{
   console.log('Server is running at port 3000 successfully!!')
})