require('dotenv').config();
let express = require('express')
let app = express();
let body_parser = require('body-parser');
let jwt = require('jsonwebtoken')

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));

app.post('/api/login', (req, res)=>{
   let email = req.body.email;
   let password = req.body.password;
   // make email to encoding
   let payload = {email: email}
   let token = jwt.sign(payload, process.env.SECRET )
   res.send(`Token is ${token}`)
})

app.listen(process.env.PORT, ()=>{
   console.log(`Server is running at port ${process.env.PORT}`)
})