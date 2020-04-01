require('dotenv').config();
let express = require('express');
let app = express();

let call_mongoose_module = require('./Call_Mongoose');
let user_info_data = require('./45_Mongoose_Save_User_Info');
let gallery_info = require('./46_Mongoose_image_save');
let Bcrypt_info = require('./47_Mongoose_Bcrypt_Password');

let category_obj = {
   id: 32,
   name: 'Mg Mg',
   image: './img/uploads/1585201924277_IMG_2453.jpg',
   since: Date.now()
}
   // get data from data base
// call_mongoose_module.get_data()
//    .then(res=>console.log(res))
//    .catch(err=>console.log(err));
   // save data in mongoose data
// call_mongoose_module.insert_data(category_obj)
//    .then(res => console.log(res))
//    .catch(err => console.log(err))

   // delete data from mongoose
// call_mongoose_module.delete_data()
//    .then(res => console.log(res))
//    .catch(err=> console.log(err));

   //update object
// let update_obj = {
//    id: '5e814d45f86d24953b421e25',
//    name: 'Yan Aung'
// }
   // update data
// call_mongoose_module.update_data(update_obj)
//    .then(res=>console.log(res))
//    .catch(err=>console.log(err))
   // destory data
// call_mongoose_module.destory_data("5e814d45f86d24953b421e25")
//    .then(res=> console.log(res))
//    .catch(err=>console.log(err));
//===================================================================//
   // read data from JSON file
// call_mongoose_module.read_category_json_data();
// call_mongoose_module.read_product_json_data();
// call_mongoose_module.join_table('id', 'pro_id', 'products')
//    .then(res=> console.log(res))
//    .catch(err=> console.log(err));
// call_mongoose_module.paginate(2, 2) // (start, how many page do you want display)
//    .then(res=>console.log(res))
//    .catch(err=>console.log(err));
//==================================================================//
let user_obj = {
   name : 'Aung Aung',
   email: 'aung@gmail.com',
   password: '523334',
}
// user_info_data.insert_user_data(user_obj)
//    .then(res=> console.log(res))
//    .catch(err=>console.log(err));

// user_info_data.display_data()
//    .then(res=>console.log(res))
//    .catch(err=>console.log(err));
// user_info_data.find_by_user_id(1)
//    .then(res=>console.log(res))
//    .catch(err=>console.log(err));
// user_info_data.find_by_email('aung@gmail.com')
//    .then(res=>console.log(res))
//    .catch(err=>console.log(err));
//================================================================//
// let image_obj = {
//    name: "mickey_mouse.png"
// }
// gallery_info.insert_image_data(image_obj)
//    .then(res=>console.log(res))
//    .catch(err=> console.log(err));
//=================================================================//
let password = ('124');
let encode = '$2a$10$Pqygvp8kQVgYvYe2xEgJuuI1BE7mVFB7vIH022E2YTbIXxur.5fHG'
Bcrypt_info.encrypt_password(password)
   .then(res=>console.log(res))
   .catch(err=>console.log(err));

Bcrypt_info.compare_password(password, encode)
   .then(res=>console.log(res))
   .catch(err=>console.log(err));

app.listen(process.env.PORT, ()=>{
   console.log(`Server is running at port ${process.env.PORT}`)
})