let database = require('./44_Mongoose');

let gallery = database.gallery;

let insert_image_data = (obj)=>{
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
let get_image_data = ()=>{
   return new Promise((resolve, reject)=>{
      gallery.findOne({}, (err, res)=>{
         if(err) reject(err);
         resolve(res);
      })
   })
}
module.exports ={
   insert_image_data,
   get_image_data
}