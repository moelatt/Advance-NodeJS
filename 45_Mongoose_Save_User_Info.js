let db = require('./44_Mongoose');

let user_info = db.user;

let insert_user_data = (obj)=>{
   return new Promise((resolve, reject)=>{
      obj['since'] = new Date();
      let users = new user_info(obj);
      users.save(obj, (err, res)=>{
         if(err) reject(err);
         else{
            resolve(res);
         }
      })
   })
}

let display_data = ()=>{
   return new Promise((resolve, reject)=>{
      user_info.find({}, (err, res)=>{
         if(err) reject(err);
         else{
            resolve(res);
         }
      })
   })
}
let find_by_user_id = (id)=>{
   return new Promise((resolve, reject)=>{
      user_info.findById({_id:id}, (err, res)=>{
         if(err) reject(err);
         resolve(res);
      })
   })
}

let find_by_email = (email)=>{
   return new Promise((resolve, reject)=>{
      user_info.findOne({email: email}, (err, res)=>{
         if(err) reject(err);
         resolve(res);
      })
   })
}
module.exports = {
   insert_user_data,
   display_data,
   find_by_user_id,
   find_by_email
}