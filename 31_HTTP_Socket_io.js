require('dotenv').config();
let express = require('express');
let app = express();
let server = require('http').createServer(app);
let path = require('path');
let hogan = require('hogan-express');
let io = require('socket.io').listen(server);

app.use(express.static(path.join(__dirname, 'img')));

app.engine('html', hogan);
app.set('view engine', 'html');

app.get('/index', (req, res)=>{
   res.render('index');
})
io.sockets.on('connection', (socket)=>{
   socket.on('login_key', (data)=>{
      // io.emit('server_key', true); login all user 
      io.sockets.connected[socket.id].emit('server_key', true); // each id
      // socket.emit('server_key', true) // certain user
      // socket.broadcast.emit('server_key', true); // open all user except close current user
      // socket.broadcast.to(socket.id).emit('server_key', true)
      socket.username = data;
      // console.log(socket.username)
      io.emit('data_key', data)
   })

   socket.on('message_key', (data)=>{
      io.emit('message_data', socket.username + ": " + data)
   })
})
server.listen(process.env.PORT, ()=>{
   console.log(`Server is running at port ${process.env.PORT}`);
})
