let bcrypt = require('bcryptjs');

let encrypt_password = (pass)=>{
   return new Promise((resolve, reject)=>{
      let salt = bcrypt.genSaltSync(10);
      let encoded = bcrypt.hash(pass, salt);
      if(encoded != null){
         resolve(encoded);
      }
      else{
         reject('Password Encode Error!!');
      }
   })
}
let compare_password = (pass, encode)=>{
   return new Promise((resolve, reject)=>{
      let compare = bcrypt.compare(pass, encode);
      if(compare){
         resolve(compare);
      }
      else{
         reject(compare);
      }
   })
}

module.exports ={
   encrypt_password,
   compare_password
}