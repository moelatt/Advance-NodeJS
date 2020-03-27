let client = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/ourdata'

let check_error = (err, res)=>{
   if(err){
      console.log('Something went wrong please check error!!', err);
   }
   else{
      console.log('Everything good to go!!', res);
   }
}

// let make_collection = (collect)=>{
//    client.connect(url, {useUnifiedTopology: true}, (err,  instance)=>{
//       let db_obj = instance.db('ourdata');
//       db_obj.createCollection(collect, (err, res)=>check_error(err, res));
//    })
// }

// make_collection('my_data')

let insert_data = (obj)=>{
   client.connect(url, {useUnifiedTopology: true}, (err, instance)=>{
      if(err){
         console.log('Something went wrong please check the error', err);
      }
      else{
         let db_obj = instance.db('ourdata');
         db_obj.collection('my_data').insertMany(obj, (err, res)=>check_error(err, res));
      }
      
   })
}
insert_data([
   {name: 'Moe Latt', Age: 32, email: 'moelatt@gmail.com'},
   {name: 'Htoo Htoo', Age: '34', email: 'htoohtoo@gmail.com', password: '1231231'}
])