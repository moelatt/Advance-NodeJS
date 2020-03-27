let express = require('express');
let app = express();
require('dotenv').config();
let body_parser = require('body-parser');
let path = require('path');
let hogan_express = require('hogan-express');

// using path library to get image in img folder
app.use(express.static(path.join('img')))

// using hogan express engine to file from views folder
app.engine('html', hogan_express);
app.set('view engine', 'html')

app.get('/index', (req, res)=>{
   res.sendFile(__dirname + '/HTML/index.html')
})

app.get('/about', (req, res)=>{ // using Hogan express engine
   res.render('About')
})

app.get('/', (req,res)=>{
   res.render('index')
})
app.listen(process.env.PORT, ()=>{
   console.log(`Server is running at port ${process.env.PORT}`);
})