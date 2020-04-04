let bcyrpt_password = require('../DataBase/Mongoose_Bcrypt_password');
let user_data = require('../DataBase/Mongoose_Users_data');


let user = (express, jwt)=>{
   let route = express.Router();
   route.post('/api/login', (req, res)=>{
      let email = req.body.email;
      let password = req.body.password;
      user_data.find_data_with_email(email)
         .then(user=> { 
            bcyrpt_password.compare_password(password, user.password)
               .then(result=>{
                  let payload = {email: user.email, name: user.name};
                  let token = jwt.sign(payload, process.env.SECRET);
                  res.send({con: true, token: token})
               })
               .catch(err=>res.send(err)); 
         })
         .catch(err=> res.send({con: false, mesg: err}))

   })
   route.post('/api/register', (req, res)=>{
      let name = req.body.name;
      let email = req.body.email;
      let password = req.body.password;
      bcyrpt_password.encrypt_password(password)
         .then(pass => {
            let obj = {
               name: name,
               email: email,
               password: pass 
            };
            user_data.insert_data(obj)
               .then(result => res.send({condition: true, message: result}))
               .catch(err=> res.send({condition: false, mesg: err}))
         })
         .catch(err=> res.send({condition: false, message: err}))
      // res.send(`Name: ${name} ==> Email: ${email} ==> Password: ${password}`)
   })
   return route;
}

module.exports = {
   user
}