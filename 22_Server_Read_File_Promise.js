let http = require('http');
let url = require('url');
let path = require('path');
let fs = require('fs');
require('dotenv').config();

let meme = {
   '.html' : 'text/html',
   '.css'  : 'text/css',
   '.js'   : 'text/javaScript',
   '.png'  : 'image/png',
   '.jpg'  : 'image/jpg',
   '.jpeg' : 'image/jpeg'
}

let check_file_path = (file_path)=>{
   return new Promise((resolve, reject)=>{
      fs.access(file_path, (err)=>{
         if(err) reject(err);
         else resolve(file_path);
      })
   })
}
let read_file_func = (file_name)=>{
   return new Promise((resolve, reject)=>{
      fs.readFile(file_name, (err, data)=>{
         if(err) reject(err);
         else resolve(data);
      })
   })
}

let router = (req, res)=>{
   let path_name = url.parse(req.url, true);
   let file_path = path_name.pathname;
   let file_path_name = __dirname + file_path;

   let file_extension = path.extname(file_path);
   check_file_path(file_path_name)
      .then(read_file_func)
      .then(data=>{
         res.writeHead(200, {'Content-Type' : meme[file_extension]});
         res.end(data);
      })
      .catch((err)=>{
         res.writeHead(404, {'Content-Type':'text/html'});
         res.end('<h1>File Not Found!! <h1>')
      })
   
}

let server = http.createServer(router);

server.listen(process.env.PORT, ()=>{
   console.log(`Server is running at port ${process.env.PORT}`)
})