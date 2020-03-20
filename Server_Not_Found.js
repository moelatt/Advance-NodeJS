let http = require('http')
let url = require('url')
let query_str = require('querystring')
require('dotenv').config();

let respond = (req, res, params)=>{
   res.writeHead(200, {'Content-Type': 'text/html'})
   res.end(params)
}

let routes = {
   "GET" : {
      '/' : (req, res)=>{
         respond(req, res, `Method GET and path ${req.url}`)
      },
      '/home': (req, res)=>{
         respond(req, res,`Method GET and path ${req.url}` )
      }
   },
   "POST": {
      '/api/login': (req, res)=>{
         let body = '';
         req.on('data', (data)=>{
            body += data;
         })
         req.on('end', ()=>{
            let query = query_str.parse(body);
            console.log( "Email: ",query.email, "Password: ",query.password);
            res.end();
         })
         // respond(req, res, `Method POST and path ${req.url}`)
      },
      '/about':(req, res)=>{
         respond(req, res,`Method POST and path ${req.url}` )
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
   // let name = params.query.name;
   // let age = params.query.age;
   // console.log("name: ", name, " Age: ", age);
   let route_err_handle = routes[method][params.pathname];

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