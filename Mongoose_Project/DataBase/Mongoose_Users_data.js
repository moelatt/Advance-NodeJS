let database = require('./Mongoose_Schema');

let user_db = database.user;

let insert_data = (obj)=>{
   return new Promise((resolve, reject)=>{
      obj['since'] = new Date();
      let db = new user_db(obj);
      db.save(obj, (err, res)=>{
         if(err) reject (err);
         else{
            resolve(res);
         }
      })
   })
}

let find_data_with_email = (email)=>{
   return new Promise((resolve, reject)=>{
      user_db.findOne({"email": email}, (err, res)=>{
         if(err) reject(err);
         else{
            resolve(res);
         }
      })
   })
}

let pagination = (start, count)=>{
   var options = {
      sort: {_id:1},
      lean: true,
      page: start,
      limit: count
   }
   return new Promise((resolve, reject)=>{
      user_db.paginate({}, options, (err, res)=>{
         if(err) reject(err);
         else{
            resolve(res);
         }
      })
   })
}

let get_all_user_data = ()=>{
   return new Promise((resolve, reject)=>{
      user_db.find({}, (err, res)=>{
         if(err) reject(err);
         else{
            resolve(res);
         }
      })
   })
}

module.exports = {
   insert_data,
   find_data_with_email,
   pagination,
   get_all_user_data
}