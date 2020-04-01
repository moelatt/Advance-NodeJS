let mongoose = require('mongoose');
let url = 'mongodb://localhost:27017/mongooseDB_2'
let connect = mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/mongooseDB_2", {useUnifiedTopology: true, useNewUrlParser: true});
autoIncrement.initialize(connection);
let mongoose_paginate = require('mongoose-paginate');


let schema = mongoose.Schema;

let catagory_schema = new schema({
   id: {type : Number, required: true},
   name: {type: String, required: true},
   image: {type: String, required: true},
   since: {type: Date, required: true}
});
catagory_schema.plugin(autoIncrement.plugin, 'category')
let cat = mongoose.model('category', catagory_schema);

let product_schema = new schema({
   pro_id: {type: Number, required: true},
   name: {type: String, required: true},
   username: {type: String, required: true},
   email: {type: String, required: true},
   image: {type: String, required: true},
   since: {type: String, required: true}
})
product_schema.plugin(autoIncrement.plugin, 'product')
product_schema.plugin(mongoose_paginate);
let product = mongoose.model('product', product_schema);

let user_schema = new schema({
   name : {type: String, require: true},
   email: {type: String, require: true},
   password: {type: Number, require: true},
   since: {type: String, require: true}
})
user_schema.plugin(autoIncrement.plugin, 'user')
let user = mongoose.model('user', user_schema);

let gallery_schema = new schema({
   name: {type: String, require: true}
})

gallery_schema.plugin(autoIncrement.plugin, 'gallery');
let gallery = mongoose.model('gallery', gallery_schema);

module.exports = {
   cat,
   product,
   user,
   gallery
};







// let mongoose = require('mongoose');
// let url = 'mongodb://localhost:27017/mongooseDB';
// let connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

// let schema = mongoose.Schema;

// let catagory_schema = new schema({
//    id: {type: Number, required: true},
//    name: {type: String, required: true},
//    image: {type: String, required: true},
//    since: {type: Date, required: true}
// })

// let cat = mongoose.model('category', catagory_schema);

// module.exports = {cat}; 

