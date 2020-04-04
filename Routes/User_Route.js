let route_user = (express, jwt)=>{
      let route = express.Router();
      route.get('/api/login', (req, res)=>{
         res.send('User route is running')
      })

      route.get('/home', (req, res)=>{
         res.send('User home route is running');
      })
      return route;
}

module.exports = {
   route_user
}