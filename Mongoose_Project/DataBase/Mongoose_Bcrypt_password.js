let bcrypt = require('bcryptjs');

let encrypt_password = (pass)=>{
   return new Promise((resolve, reject)=>{
      let salt = bcrypt.genSaltSync(10) // greater than 10 with hard to heck
      let encoded = bcrypt.hash(pass, salt);
      if(encoded != null){
         resolve(encoded);
      }
      else{
         reject("Encode Password Error!!")
      }
   });
}
let compare_password = (password, encode)=>{
   return new Promise((resolve, reject)=>{
      let com = bcrypt.compare(password, encode);
      if(com){
         resolve(com);
      }
      else{
         reject(com);
      }
   })
}
module.exports = {
   encrypt_password,
   compare_password
}