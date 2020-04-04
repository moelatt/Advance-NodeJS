let mongoose = require('mongoose');
let url = 'mongodb://localhost:27017/my_database';
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
// var connection = mongoose.createConnection("mongodb://localhost/mongooseDB_2", {useUnifiedTopology: true, useNewUrlParser: true});
let autoIncrement = require('mongoose-auto-increment')
autoIncrement.initialize(mongoose.connection)
let mongoose_paginate = require('mongoose-paginate')
let schema = mongoose.Schema;

let user_schema = new schema({
   name: {type: String, require: true},
   email: {type: String, require: true},
   password: {type: String, require: true},
   since: {type: String, require: true}
})
let gallery_schema = new schema({
   name: {type: String, require: true}
})
user_schema.plugin(autoIncrement.plugin, 'user')
user_schema.plugin(mongoose_paginate);
let user = mongoose.model('user', user_schema)
gallery_schema.plugin(autoIncrement.plugin, 'gallery');
let gallery = mongoose.model('gallery', gallery_schema);

module.exports = {
   user,
   gallery
}