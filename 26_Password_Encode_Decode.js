let bcrypt = require('bcrypt');

let encode = (plain_pass)=>{
   return new Promise((resolve, reject)=>{
      bcrypt.genSalt(plain_pass,salt, (err, hash)=>{
         if(err) reject(err);
         else resolve(hash);
      })
   })
}
let compare = (plain_pass, hash_pass)=>{
   return new Promise((resolve, reject)=>{
      bcrypt.compare(plain_pass, hash_pass, (err, bool)=>{
         if(err) reject(err);
         else resolve(bool)
      })
   })
}

module.exports = {
   encode,
   compare
}