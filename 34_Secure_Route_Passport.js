require('dotenv').config();
let express = require('express');
let app = express();
let body_parser = require('body-parser');
let jwt = require('jsonwebtoken');
let passport = require('passport')
let JwtStrategy = require('passport-jwt').Strategy;
let  ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;

let user_map = new Map();
// user_map.set("moelatt@gmail.com", {name : 'moelatt', email: 'moelatt@gmail.com', password: '1234'});
// user_map.set("htoohtoo@gmail.com", {name : 'Htoo Htoo', email: 'htoohtoo@gmail.com', password: '123'});
user_map.set('moelatt@gmail.com', {name: 'moelatt', email: 'moelatt@gmail.com', pass: '12312'});
user_map.set('htoohtoo@gmail.com', {name: 'Htoo Htoo', email: 'htoohtoo@gmail.com', pass: '123123'});



let strategy_jwt = new JwtStrategy(opts, function(payload, done) {
   let user = user_map.get(payload.email);
   if(user != null || user != undefined){
      done(null, user);
   }
   else{
      ('No user email with that email', null)
   }
});
passport.use(strategy_jwt);
app.get('/free', (req, res)=>{
   res.send({data: "Anyone can enter this page. Not Secure!!!"})
})

app.get('/secure',passport.authenticate('jwt', {session : false}),(req, res)=>{
   res.send({data: "This page is secure with authorize user "})
} )
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended : true}));

app.get('/login', (req, res)=>{
   let email = req.body.email;
   let pass = req.body.password;
   let user = user_map.get(email);
   if(user != null || user != undefined){
      if(user.pass == pass){
         let payload = {email : email};
         let token = jwt.sign(payload, process.env.SECRET)
         res.json({token : token})
      }
      else{
         res.send({data: 'Password Error!'})
      }
   }
   else{
      res.send({data: 'Email Error!!'})
   }
   
})

app.listen(process.env.PORT, ()=>{
   console.log(`Server is running at port ${process.env.PORT}`);
})




// require('dotenv').config();
// let express = require('express');
// let app = express();
// let body_parser = require('body-parser')
// let jwt = require('jsonwebtoken');
// let passport = require('passport')
// let JwtStrategy = require('passport-jwt').Strategy;
// let ExtractJwt = require('passport-jwt').ExtractJwt;

// app.use(body_parser.json());
// app.use(body_parser.urlencoded({extended : true}));
// var opts = {}
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = process.env.SECRET;

// // create data 
// let user_map = new Map();
// user_map.set('moelatt@gmail.com', {name: 'moelatt', email: 'moelatt@gmail.com', pass: '12312'});
// user_map.set('htoohtoo@gmail.com', {name: 'Htoo Htoo', email: 'htoohtoo@gmail.com', pass: '123123'});

 
// let Strategy_of_jwt = new JwtStrategy(opts, function(payload, done) {
//    let user = user_map.get(payload.email);
//    if(user != null || user != undefined){
//       done(null, user);
//    }
//    else{
//       done('No user email with that email', null)
//    }
// });
// passport.use(Strategy_of_jwt);
// app.get('/login', (req, res)=>{
//    let email = req.body.email;
//    let user = user_map.get(email);
//    let pass = req.body.password;
   
//    if(user != null || user != undefined){
//       if(user.pass == pass){
//          let payload = {email : email};
//          let token = jwt.sign(payload, process.env.SECRET);
//          res.json({token : token});
//       }
//       else{
//          res.send({data: 'Password Error!!'})
//       }
//    }
//    else{
//       res.send({data: 'Email Error!!'})
//    }
// })
// app.get('/free', (req, res)=>{
//    res.send({data: 'Free route!! anyone can enter'});
// })

// app.get('/secure', passport.authenticate('jwt', {session : false}), (req, res)=>{
//    res.send({data : 'Route is secure!!!! no one can enter without giveing correct info'})
// })

// app.listen(process.env.PORT, ()=>{
//    console.log(`Server is running at port ${process.env.PORT}`)
// })