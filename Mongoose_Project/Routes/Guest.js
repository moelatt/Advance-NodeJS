let gallery = require('../DataBase/Mongoose_Gallery')
let user = require('../DataBase/Mongoose_Users_data')
let guest_route = (express)=>{
   let route = express.Router();
   route.get('/', (req, res)=>{
      res.send('Guest route is running');
   })
   route.get('/gallery', (req, res)=>{
      gallery.get_all_image_data()
         .then(result=> res.json({con: true, msg: result}))
         .catch(err=> res.send(err))
   })
   route.get('/all_user_name',(req, res)=>{
      user.get_all_user_data()
         .then(result=> {
            res.json({con: true, msg: result})
         })
         .catch(err=> res.json({con: false, msg:err}))
   } )
   return route;
}

module.exports = {
   guest_route
}