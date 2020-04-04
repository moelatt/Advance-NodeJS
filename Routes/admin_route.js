let admin = (express, passport)=>{
   let route = express.Router();
   route.get('/home', (req, res)=>{
      res.send('Admin home route is running');
   })
   return route;
}

module.exports = {
   admin
}