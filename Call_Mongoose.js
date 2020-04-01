let db = require('./44_Mongoose');
let fs = require('fs')

let category = db.cat;
let product = db.product;

// get all data
let get_data = ()=>{
   return new Promise((resolve, reject)=>{
      category.find({}, (err, res)=>{
         if(err) reject(err)
         resolve(res);
      })
   })
}
// save data
let insert_data = (obj)=>{
   return new Promise((resolve, reject)=>{
      category.insertMany(obj, (err, res)=>{
         if(err) reject(err)
         resolve(res);
      })
      // let data = new category(obj);
      // data.save((err, res)=>{
      //    if(err) reject(err);
      //    resolve(res);
      // })
   })
}
// delete data 
let delete_data = ()=>{
   return new Promise((resolve, reject)=>{
      category.deleteOne({}, (err, res)=>{
         if(err) reject(err);
         resolve(res)
      })
   })
}
// update data object
let update_data = (obj)=>{
   return new Promise((resolve,reject)=>{
      // let current_name = {name: 'Mg Mg'}
      // category.updateOne(current_name, {$set: {name: 'kyaw kyaw'}}, (err, res)=>{
      //    if(err) reject(err);
      //    resolve(res);
      // })

         // update data with default _id
      category.findById(obj.id, (err, res)=>{
         if(err) reject(err);
         else{
            res.name = obj.name;
            res.save((err, res)=>{
               if(err) reject(err);
               resolve(res);
            })
         }
      })
   })
}
   // destory data from database
let destory_data = (id)=>{
   return new Promise((resolve, reject)=>{
      category.deleteOne({_id: id}, (err, res)=>{
         if(err) reject(err);
         resolve(res);
      })
   })
}
//=================================================================//
   // read the data from JSON file
let read_category_json_data = ()=>{
   fs.readFile('data.json', (err, res)=>{
      if(err){
         console.log(err);
      }
      else{
         let data = JSON.parse(res);
         data.forEach((each_data)=>{
            let obj = {
               id: each_data.id,
               name: each_data.name,
               image: each_data.image,
               since: Date.now()
            }
            insert_data(obj)
               .then(res=>console.log(res))
               .catch(err=> console.log(err));
         })
      }
   })
}

let product_insert_data = (obj)=>{
   return new Promise((resolve, reject)=>{
      obj['since'] = new Date();
       product.insertMany(obj, (err, res)=> {
         if(err) reject(err);
         else{
            resolve(res)
         }
      })
   })
}

let read_product_json_data = ()=>{
   fs.readFile('product.json', (err, res)=>{
      if(err) console.log(err);
      else{
         let data = JSON.parse(res);
         data.forEach((each_product)=>{
            let obj = {
               "pro_id": each_product.pro_id,
               "name": each_product.name,
               "username": each_product.username,
               "email": each_product.email,
               "image": each_product.image
            }
            product_insert_data(obj)
               .then(res=> console.log(res))
               .catch(err=> console.log(err));
         })
      }
   })
}

 //get join two table data
let join_table = (local_id, foreign_id, table )=>{
   return new Promise((resolve, reject)=>{
      category.aggregate([{
         $lookup : {
            from : table,
            localField: local_id,
            foreignField: foreign_id,
            as: "category_info"
         }
      }]).exec((err, res)=>{
         if(err) reject(err);
         else{
            resolve(res);
         }
      })
   })
}
   // divid page by limit page
let paginate = (start, count)=>{
   var options = {
      sort: {_id: 1},
      lean:  true,
      page: start,
      limit: count 
   }
   return new Promise((resolve, reject)=>{
      product.paginate({}, options, (err, res)=>{
         if(err) reject(err);
         else{
            resolve(res)
         }
      })
   })
}
module.exports = {
   get_data,
   insert_data,
   delete_data,
   update_data,
   destory_data,
   read_category_json_data,
   read_product_json_data,
   join_table,
   paginate
}












// let db = require('./44_Mongoose');
// let Category = db.cat;

// // get all data
// let get_data = ()=>{
//    return new Promise((resolve, reject)=>{
//       Category.find({}, (err, res)=>{
//          if(err) reject(err);
//          resolve(res);
//       })
//    })
// }

// let insert_data = (obj)=>{
//    return new Promise((resolve, reject)=>{
//       let data = new Category(obj);
//       data.save((err, res)=>{
//          if(err) reject(err);
//          resolve(res);
//       })
//    })
// }
// let delete_data = ()=>{
//    return new Promise((resolve, reject)=>{
//       let query = {name: 'Mg Mg'};
//       Category.deleteOne(query, (err, res)=>{
//          if(err) reject(err);
//          resolve(res);
//       })
//    })
// }
// module.exports = {
//    get_data,
//    insert_data,
//    delete_data
// }