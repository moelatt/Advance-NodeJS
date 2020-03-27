require('dotenv').config();
let express = require('express');
let app = express();

let guest_route = require('./Routes/guest_route')(express);
let user_route = require('./Routes/user_member_router')(express);
app.use('/', guest_route);
app.use('/user', user_route);

app.listen(process.env.PORT, ()=>{
   console.log(`Server is running at port ${process.env.PORT}`)
})