let client = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/database';

let check_error = (err, res)=>{
   if(err){
      console.log(err);
   }
   else{
      console.log('Everything is good to go!!!', res);
   }
}
let sort_data = ()=>{
   client.connect(url, {useUnifiedTopology: true}, (err, instance)=>{
      if(err){
         console.log(err);
      }
      else{
         let db_obj = instance.db('database');
         let mySort = {name : 1}; // 1 is increasing and -1 is decreasing order
         db_obj.collection('database').find({}, {projection: {_id: 0, name: 1, age: 1}}).sort(mySort).toArray((err, res)=>check_error(err, res));
      }
   })
}
sort_data();