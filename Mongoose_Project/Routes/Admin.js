let multer = require('multer');
let gallery = require('../DataBase/Mongoose_Gallery');
let user_data = require('../DataBase/Mongoose_Users_data')
let bcrypt = require('../DataBase/Mongoose_Bcrypt_password')

var storage = multer.diskStorage({ // multer package
   destination: function (req, file, cb) {
     cb(null, './assets')
   },
   filename: function (req, file, cb) {
     cb(null, Date.now() + "_" + file.originalname)
   }
 })
  
 var upload = multer({ storage: storage })

let admin = (express, passport)=>{
   let route = express.Router();

   route.get('/home', (req, res)=>{
      res.send('Admin Home Page')
   })

   route.get('/secure', passport.authenticate('jwt', {session: false}),(req, res)=>{
      res.send('Secure Admin Page');
   })

   route.post('/image/upload', passport.authenticate('jwt', {session: false}), upload.single('image'), (req, res)=>{
      let img_obj = {
         name: req.file.filename
      }
      gallery.save_image_data(img_obj)
         .then(result => res.json({con: true, msg: result}))
         .catch(err => res.json({con: false, msg: err}));
   })
   route.get('/paginate/:start/:count', passport.authenticate('jwt', {session: false}), (req, res)=>{
      let start = req.param('start'); // mongoose-pagination package
      let count = req.param('count');
      user_data.pagination(Number(start), Number(count))
         .then(result=> res.json({con: true, msg: result}))
         .catch(err => res.send({con:false, msg: err}));
   })

   route.get('/all_image', passport.authenticate('jwt', {session: false}), (req, res)=>{
      gallery.get_all_image_data()
         .then(result=> res.json({con: true, msg: result}))
         .catch(err => res.json({con: false, msg: err}))
   })
   route.get('/all_user_info', passport.authenticate('jwt', {session: false}), (req, res)=>{
      user_data.get_all_user_data()
         .then(result => res.json({con: true, msg: result}))
         .catch(err=>res.json({con: false, msg: err}))
   })
   route.post('/user_info/create', passport.authenticate('jwt', {session: false}), (req, res)=>{
      let input_password = req.body.password;
     bcrypt.encrypt_password(input_password)
      .then(pass=> {
         let obj = {
            name: req.body.name,
            email: req.body.email,
            password: pass
         }
         user_data.insert_data(obj)
            .then(result=> res.json({con:true, msg: result}))
            .catch(err=>res.json({con:false, msg:err}));

      })
      .catch(err=>{return err})
      
   })
   return route
}
module.exports = {
   admin
}