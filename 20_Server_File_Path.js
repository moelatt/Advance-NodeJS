let http = require('http')
let url = require('url');
let fs = require('fs')
let query_string = require('querystring')
require('dotenv').config();

let respond_route = (req, res, params)=>{
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end(params);
}

let read_file_name = (file_path, res)=>{
   fs.access(file_path, fs.F_OK, (err)=>{
      if(err){
         res.end("File not found")
      }
      else{
         fs.readFile(file_path, (err, data)=>{
            if(err) throw err;
            else{
               res.end(data);
            }
         })
      }
   })
}

let routes = {
   'GET': {
      '/index.html' : (req, res, routhPath)=>{
         let file_path = __dirname + routhPath.pathname
         // respond_route(req, res, file_path);
         read_file_name(file_path, res)
      },
      '/index': (req, res, routhPath)=>{
         let file_path = __dirname + routhPath.pathname;
         respond_route(req, res, file_path);
      }
   },
   'POST': {
      '/': (req, res)=>{
         let body = '';
         req.on('data', (data)=>{
            body += data;
         })
         req.on('end', ()=>{
            let query = query_string.parse(body);
         //   console.log('Email ', query.email, "Password ", query.password  )
            res.end(query.email);
         })
      },
      '/about.html': (req, res)=>{
         let file_path = __dirname + '/about.html'
         respond_route(req, res, file_path)
      }
   },
   'Not Found': (req, res)=>{
      res.writeHead(404)
      res.end("404 Error! page URL Not found!!")
   }
}

let start = (req, res)=>{
   let method = req.method; // GET or POST
   let route_path =url.parse(req.url, true); // calling route path
   let route_err_handle = routes[method][route_path.pathname];

   if(route_err_handle != null && route_err_handle != undefined){
      route_err_handle(req, res, route_path);
   }
   else{
      routes["Not Found"](req,res);
   }
}

let server = http.createServer(start);

server.listen(process.env.PORT, function(){
   console.log(`Server is running at port ${process.env.PORT}`)
})
