let client = require('mongodb').MongoClient;
let url = ('mongodb://localhost:27017/database');

let check_error = (err, res)=>{
   if(err){
      console.log("Something went wrong!!", err);
   }
   else{
      console.log('Everything is good to go!! \n', res);
   }
}
// let insert_data = (obj)=>{
//    client.connect(url, {useUnifiedTopology: true}, (err, instance)=>{
//       if(err){
//          console.log('Something went wrong!!', err)
//       }
//       else{
//          let db_obj = instance.db('database');
//          db_obj.collection('database').insertMany(obj, (err, res)=>check_error(err, res));
//       }
//    })
// }

// insert_data([
//    {name: 'Mg Mg', age: 23, major: 'Eco', status: 'single'},
//    {name: 'Su Su', age: 18, major: 'engineer', status: 'divorced'},
//    {name: 'Aung Aung', age: 33, major: 'computer science', status: 'married', address: 'NewYork'}
// ])

let find_data = ()=>{
   client.connect(url, {useUnifiedTopology: true}, (err, instance)=>{
      if(err){
         console.log('Something went wrong!!', err);
      }
      else{
         let db_obj = instance.db('database');
         db_obj.collection('database').find({}).toArray((err, res)=>check_error(err, res));
      }
   })
}

find_data()


// let client = require('mongodb').MongoClient;
// let url = 'mongodb://localhost:27017/';

// let check_error = (err, res)=>{
//    if(err){
//       console.log('Something went wrong please check error', err);
//    }
//    else{
//       console.log("Everything is good to go!! \n", res);
//    }
// }

// let find_data = ()=>{
//    client.connect(url,{useUnifiedTopology: true} ,(err, instance)=>{
//       if(err){
//          console.log('Something went wrong please check error', err);
//       }
//       else{
//          let db_obj = instance.db('ourdata');
//          // find very first data  
//          // db_obj.collection('my_data').findOne({}, (err, res)=> check_error(err, res));
//          // find all data in data base
//          // db_obj.collection('my_data').find({}).toArray((err, res)=>check_error(err, res));
//          // find specific object
//         /* let query = {Age: 32};
//          db_obj.collection('my_data').find(query).toArray((err, res)=>check_error(err,res)); */
//          // find all name obj in data
//          db_obj.collection('my_data').find({}, {projection:{_id: 0, name : 1}}).toArray((res, err)=>check_error(res, err));

//       }
//    })
// }
// find_data();