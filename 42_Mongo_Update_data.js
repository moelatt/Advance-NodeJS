let client = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/database';

let check_error = (err, res)=>{
   if(err){
      console.log('Something went wrong!!', err);
   }
   else{
      console.log('Everything is good to do!!',  res);
   }
}
// update current data
let update_data = ()=>{
   client.connect(url, {useUnifiedTopology: true}, (err, instance)=>{
      if(err){
         console.log(err);
      }
      else{
         let db_obj = instance.db('my_data');
         let current_value = {age: 26}
         // update one
         // db_obj.collection('my_data').update(current_value, {$set: {name: 'Kyaw Kyaw'}}, (err, res)=> check_error(err, res));
         // update many
         db_obj.collection('my_data').updateMany(current_value, {$set: {age: 96}}, (err, res)=>check_error(err,res));
      }
   })
}
update_data();
// insert many data
// let insert_data = (obj)=>{
//    client.connect(url, {useUnifiedTopology: true}, (err, instance)=>{
//       if(err){
//          console.log(err);
//       }
//       else{
//          let db_obj = instance.db('my_data');
//          db_obj.collection('my_data').insertOne(obj, (err, res)=>check_error(err,res));
//       }
//    })
// }
// // insert one data if insert many data use [] and insertMany 
// insert_data(
//    // {name: 'Moe Moe', age: 23, email: 'moemoe@gmail.com'},
//    // {name: 'htoo htoo', age: 24, email: 'htoohtoo@gmail.com', major: 'Doctor'},
//    {name: 'Aung Aung', age: 28, email: 'aungaung@gmail.com', major: 'engineer'}
// );