let client = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/database';

let check_error = (err, res)=>{
   if(err){
      console.log('Something went wrong!!',err);
   }
   else{
      console.log('Everything is good to go!!!', res);
   }
}

let delete_data = ()=>{
   client.connect(url, {useUnifiedTopology: true}, (err, instance)=>{
      if(err){
         console.log(err);
      }
      else{
         let db_obj = instance.db('database');
         let delete_name = {name: 'Mg Mg'}
         // delete one object info
         db_obj.collection('database').deleteOne(delete_name, (err, res)=>check_error(err,res));
         // delete all data object
         // db_obj.collection('database').deleteMany({}, (err, res)=>check_error(err,res));
         // delete data inside collection
         // db_obj.collection('database').drop({}, (err, res)=>check_error(err, res));
         // delete the whole data base
         // db_obj.dropDatabase('database', (err, res)=>check_error(err, res));
         // db_obj.dropCollection('database', (err,res)=>check_error(err,res));
      }
   })
}
delete_data();