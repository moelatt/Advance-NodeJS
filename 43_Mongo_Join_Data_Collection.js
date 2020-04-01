let client = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';

let check_error = (err, res)=>{
   if(err){
      console.log('Something went wrong!! \n', err);
   }
   else{
      console.log('Everything is ready to go!! \n', res);
   }
}
let insert_data_1 = (obj)=>{
   client.connect(url, {useUnifiedTopology: true}, (err, instance)=>{
      if(err){
         console.log('Something went wrong!! \n', err);
      }
      else{
         let db_obj = instance.db('join_data');
         db_obj.collection('data_1').insertMany(obj, (err, res)=>check_error(err, res))
      }
   })
} 

// insert_data_1([
//    {name: 'Moe Latt', age: 23, email: 'moelatt@gmail.com', major: 'computer science'},
//    {name: 'Kyaw Kyaw', age: 45,email: 'kyawkyaw@gmail.com', major: 'engineer'}
// ])
// insert data 2 with data 1 
let insert_data_2 = (obj)=>{
   client.connect(url, {useUnifiedTopology: true}, (err, instance)=>{
      if(err){
         console.log(err);
      }
      else{
         let db_obj = instance.db('join_data');
         db_obj.collection('data_1').find({}).toArray((err, res)=>{
            if(err){
               console.log(err);
            }
            else{
               let i = 0;
               obj.forEach(data=>{
                  data["userID"] = res[i]._id;
                  db_obj.collection('data_2').insertOne(data, (err, res)=>check_error(err, res))
                  i = i + 1;
               })
            }
         });
      }
   })
}
// insert_data_2([
//    {userID: 'user_id', product: 'Computer', price: 400, software: 'window'},
//    {userID: 'user_id', product: 'MacBook', price: 900, software: 'IOS'},

// ]);


// get data from another table and combine with current data
let join_data_in_table = ()=>{
   client.connect(url, {useUnifiedTopology: true}, (err, instance)=>{
      if(err){
         console.log(err);
      }
      else{
         let db_obj = instance.db('join_data');
         db_obj.collection('data_1').aggregate([
            {
               $lookup: {
                  from: 'data_2',
                  localField: '_id',
                  foreignField: 'userID',
                  as: 'user_orders'
               }
            }
         ]).toArray((err, res)=> check_error(err, res.forEach(data=>{
            console.log(data)
         })));
      }
   })
}

join_data_in_table();