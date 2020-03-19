let http = require('http')
let url = require('url')
require('dotenv').config();

let routes = {
   "GET" : {
      '/' : (req, res, params)=>{
         res.writeHead(200, {'Content-Type': 'text/html'})
         res.end(`Method GET and path ${req.url}`)
      },
      '/home': (req, res, params)=>{
         res.writeHead(200, {'Content-Type': 'text/html'})
         res.end(`Method GET and path ${req.url} and 
                  name is ${params.query.name} and age is ${params.query.age}`)
      }
   },
   "POST": {
      '/': (req, res, params)=>{
         res.writeHead(200, {'Content-Type': 'text/html'})
         res.end(`Method POST and path ${req.url}`)
      },
      '/about':(req, res, params)=>{
         res.writeHead(200, {'Content-Type': 'text/html'})
         res.end(`Method POST and path ${req.url}`);
      }
   },
   "NOT FOUND": (req, res)=>{
      res.writeHead(404);
      res.end("404 Error! Page URL Not Found")
   }
}

let start = function(req, res){
   let method = req.method;
   let params = url.parse(req.url, true);
   let name = params.query.name;
   let age = params.query.age;
   console.log("name: ", name, " Age: ", age);
   let route_err_handle = routes[method][params.pathname];

   console.log(route_err_handle);
   if(route_err_handle != null && route_err_handle != undefined){
      route_err_handle(req, res, params);
   }
   else{
      routes['NOT FOUND'](req, res);
   }
}

let server = http.createServer(start);

server.listen(process.env.PORT, ()=>{
   console.log("Server is running at port 3000");
})