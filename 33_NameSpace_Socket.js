require('dotenv').config();
let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let hogan = require('hogan-express');

app.engine('html', hogan);
app.set('view engine', 'html');

app.get('/index', (req, res)=>{
   res.render('index');
})

let game_nsp = io.of('game');
let book_nsp = io.of('book');

game_nsp.on('connection', (socket)=>{
   socket.on('gameStart', data =>{
      console.log(data)
   })
})

book_nsp.on('connection', (socket)=>{
   socket.on('bookStart', (data)=>{
      console.log(data)
   })
})

server.listen(process.env.PORT, ()=>{
   console.log(`Server is running at port ${process.env.PORT}`)
})