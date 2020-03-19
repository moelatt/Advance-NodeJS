let http = require('http');
let url = require('url');
let port = 3000;

let routes = {
   "GET": {
      '/': (req,res)=> {
         res.writeHead(200, {'Content-Type':'text/html'});
         res.end(`Method GET and path ${req.url}`)
      },
      '/home': (req,res)=>{
         res.writeHead(200, {'Content-Type':'text/html'})
         res.end(`Method GET and path ${req.url}`)
      }
   },
   "POST": {
      '/': (req,res)=>{
         res.writeHead(200, {'Content-Type':'text/html'})
         res.end(`Method POST and path ${req.url}`)
      },
      '/about': (req,res)=>{
         res.writeHead(200, {'Content-Type':'text/html'})
         res.end(`Method POST and path ${req.url}`)
      }
   }
}

let start = function(req, res){
   let method = req.method;
   // let path = req.url;
   // routes[method][path]();
   // res.end(routes[method][path]())
   let url_path = url.parse(req.url, true);
   routes[method][url_path.pathname](req, res);
}

let server = http.createServer(start);

server.listen(port, ()=>{
   console.log(`Server is running at port ${port}`)
})