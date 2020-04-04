require('dotenv').config();
let express = require('express');
let app = express();
let jwt = require('jsonwebtoken')
let passport = require('passport');

let route_1 = require('./Routes/User_Route');
let route_2 = require('./Routes/Guest_Router');
let route_3 = require('./Routes/admin_route');
let route_user = route_1.route_user(express, jwt);
let route_guest = route_2.guest(express);
let route_admin = route_3.admin(express, passport);

app.use('/user', route_user)
app.use('/', route_guest);
app.use('/admin', route_admin);



app.listen(process.env.PORT, ()=>{
   console.log(`Server is running at PORT ${process.env.PORT}`)
})