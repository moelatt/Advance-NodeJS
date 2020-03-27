// MongoDB is NoSql Data Base system => vertical Scalable and horizontal Scalable
let client = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/ourdb';

let make_collection = (collect)=>{
   client.connect(url, {useUnifiedTopology: true}, (err, instance)=>{
      if(err){
         console.log('Something went wrong!!')
      }
      else{
         let db_obj = instance.db('ourdb');
         db_obj.createCollection(collect, (err, instance)=>check_error(err, instance));
      }
   })
}
make_collection('hello world');

let check_error = (err, instance)=>{
   if(err){
      console.log('Something went wrong!!', err);
   }
   else{
      console.log('Everything is good to go!!');
   }
}










// let client = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017/ourdb';

// // client.connect(url, {useUnifiedTopology: true} ,(err, instance)=>{
// //    check_error(err, instance);
// // })
// let make_collection = (collect)=>{
//    client.connect(url, {useUnifiedTopology: true}, (err, instance)=>{
//       if(err){
//          console.log('Something went wrong!! ', err);
//       }
//       else{
//          let db_obj = instance.db('ourdb');
//          db_obj.createCollection(collect, (err, instance)=>check_error(err, instance));
//       }
//    } )
// }
// make_collection('moelatt')
// let check_error = (err, instance)=>{
//    if(err){
//       console.log('Something wrong please check error!!!', err)
//    }
//    else{
//       console.log('everything is good to go!!!');
//    }
// }