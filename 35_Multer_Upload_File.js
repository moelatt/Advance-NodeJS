// multiple file upload
require('dotenv').config();
let express = require('express');
let app = express();
let multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './img/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname)
  }
})
var upload = multer({ storage: storage })

// upload single file
app.post('/upload_single', upload.single('image'), (req, res)=>{
   res.send(req.file.filename);
})

// upload multiple file 
app.post('/upload_multiple', upload.array('images', 12), (req, res)=>{
  req.files.forEach((file)=>{
    console.log(file.filename);
  })
  res.send(req.files)
})

app.listen(process.env.PORT,()=>{
  console.log(`Server is running at port ${process.env.PORT}`)
})










// single file upload
// require('dotenv').config();
// let express = require('express');
// let app = express();
// let multer = require('multer')

// var storage = multer.diskStorage({
//    destination: function (req, file, cb) {
//      cb(null, './img/uploads')
//    },
//    filename: function (req, file, cb) {
//      cb(null, Date.now() + '_' + file.originalname)
//    }
//  })
  
//  var upload = multer({ storage: storage })

// app.post('/upload', upload.single('image'), (req, res)=>{
//    res.send(req.file.filename);
// })
// app.listen(process.env.PORT, ()=>{
//    console.log(`Server is running port at ${process.env.PORT}`)
// })