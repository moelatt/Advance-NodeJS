let database = require('./Mongoose_Schema');
let gallery = database.gallery;

let save_image_data = (obj)=>{
   return new Promise((resolve, reject)=>{
      let data = new gallery(obj);
      data.save(obj, (err, res)=>{
         if(err) reject(err);
         else{
            resolve(res);
         }
      })
   })
}

let get_all_image_data = ()=>{
   return new Promise((resolve, reject)=>{
      gallery.find({}, (err, res)=>{
         if(err) reject(err);
         else{
            resolve(res);
         }
      })
   })
}

module.exports = {
   save_image_data,
   get_all_image_data
}