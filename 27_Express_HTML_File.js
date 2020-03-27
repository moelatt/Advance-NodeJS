require('dotenv').config()
let express = require('express');
let path = require('path');
let app = express();

// use path library to display image 
app.use(express.static(path.join('img')))


app.get('/', (req, res)=>{
   res.sendFile(__dirname + '/HTML/index.html');
})
app.get('/index', (req,res)=>{
   res.sendFile(__dirname + '/index.html');
})
app.get('/about', (req, res)=>{
   res.sendFile(__dirname + '/HTML/About.html');
})
app.listen(process.env.PORT, ()=>{
   console.log(`Server is running at port ${process.env.PORT}`);
})