let http = require('http');
let port = 3000;
 
let obj = {
   name: "Moe",
   age : 25,
   parents: {
      Father: "U Than",
      Mother: "U Thein"
   }
}
/* javaScript to JSON use JSON.stringify
   JSON to javaScript use JSON.parse() */

let server = http.createServer(function(req, res){
   res.writeHead(200, {'Content-Type' : 'text/JSON'});
   res.end(JSON.stringify(obj)); 
})

server.listen(port, ()=>{
   console.log(`Server is running at port ${3000}`)
})