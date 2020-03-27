let express = require('express');
let app = express();
let body_parser = require('body-parser'); 
require('dotenv').config();

// using body-parser library 
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended :  true}))
 
// get id parameter
app.get('/api/id/:id', (req, res)=>{
   let id =  req.params.id;
   res.send(`ID Parameter is ${id}`)
})

// get value parameter
app.get('/api/value/:value', (req, res)=>{
   let value = req.params.value;
   res.send(`Value Parameter is ${value}`);
})

// get user input email and password (?email=mgmg@gmail.com&password=1232123)
app.get('/user/input', (req, res)=>{
   let email = req.query.email;
   let pass = req.query.password;
   res.send(`Email is ${email} and Password is ${pass}`);
})

// using body_parser to get the user input (localhost:3000/api/login)
app.get('/api/login', (req, res)=>{ // no need to show email and pass in URL
   let email = req.body.email;
   let password = req.body.password;
   res.send(`Email is ${email} & Password is ${password}`)
})
app.listen(process.env.PORT, ()=>{
   console.log(`Server is running at port ${process.env.PORT}`)
})