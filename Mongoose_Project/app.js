require('dotenv').config();
let express = require('express');
let app = express();
let body_parser = require('body-parser');
let route_1 = require('./Routes/User')
let route_2 = require('./Routes/Admin')
let route_3 = require('./Routes/Guest')
let jwt = require('jsonwebtoken')
let passport = require('passport')
let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;
let user_data = require('./DataBase/Mongoose_Users_data');
let path = require('path');

let options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.SECRET;

let Strategy_jwt = new JwtStrategy(options, (payload, done)=> {
   let name = payload.name;
   let email = payload.email;
   user_data.find_data_with_email(email)
      .then(user=>{
         if(user.name == name){
            done(null, user)
         }
      })
      .catch(err=>done(err, null))
})

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, './assets')))
passport.use(Strategy_jwt);


app.use('/user', route_1.user(express, jwt))
app.use('/admin', route_2.admin(express, passport))
app.use('/guest', route_3.guest_route(express));

app.listen(process.env.PORT, ()=>{
   console.log(`Server is running at PORT ${process.env.PORT}`)
})

