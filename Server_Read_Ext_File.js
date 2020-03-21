let http = require('http');
let url = require('url');
let path = require('path')
let fs = require('fs')
require('dotenv').config()

let meme = {
   '.html' : 'text/html',
   '.css' : 'text/css',
   '.jpg' : 'image/jpg',
   '.png' : 'image/png',
   '.gif' : 'image/gif'
} 

let router = (req, res)=>{
   let path_name = url.parse(req.url, true);
   let file_path_name = path_name.pathname;
   
   let file_name = __dirname + file_path_name ;
   // res.end(file_name);

   // file extension such as .html, .js, .png
   let file_extension = path.extname(path_name.pathname); 

   fs.access(file_name, fs.F_OK, (err)=>{
      if(err){
         res.writeHead(404,{'Content-Type':'text/html'});
         res.end('<h1> File Not Found <h1>');
      }
      else{
         fs.readFile(file_name, (err, data)=>{
            if(err){
               res.writeHead(403, {'Content-Type':'text/html'})
               res.end('<h1> File read Error <h1>')
            }
            else{
               res.writeHead(200, {'Content-Type':meme[file_extension]})
               res.end(data);
            }
         })
      }
   })
}

let server = http.createServer(router);


server.listen(process.env.PORT, function(){
   console.log(`Server is running at port ${process.env.PORT}`);
})