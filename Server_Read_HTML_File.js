let http = require('http');
let url = require('url');
require('dotenv').config();
let fs = require('fs');

let read_file_path = (filePath, res)=>{
   fs.access(filePath, fs.F_OK, ()=>{
      fs.readFile(filePath, (err, data)=>{
         if(err){ 
            res.writeHead(404, {'Content-Type' : 'text/html'})
            res.end("Could not able to read File");
         }
         else{
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
         }
      }) 
   })

}

let routes = {
   'GET': {
      '/HTML/index.html': (req, res, routePath)=>{
         let file_name = __dirname + routePath;
         read_file_path(file_name, res)
      }
   },
   'POST':{
      '/HTML/about.html': (req, res, routePath)=>{
         let file_name = __dirname + routePath;
         read_file_path(file_name, res)
      }
   },
   'Not Found': (res)=>{
      res.writeHead(404)
      res.end("404 Error! page URL Not found!!")
   }
}

let start_server = (req, res)=>{
   let method = req.method;
   
   let route_path = url.parse(req.url, true);

   let route_err_handle = routes[method][route_path.pathname];
   if(route_err_handle != null && route_err_handle != undefined){
      route_err_handle(req, res, route_path.pathname);
   }
   else{
      routes['Not Found'](res);
   }
   // console.log(route_path.pathname)
}

let server = http.createServer(start_server);

server.listen(process.env.PORT, function(){
   console.log(`Server is running at port ${process.env.PORT}`)
})