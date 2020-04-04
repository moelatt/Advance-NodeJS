let guest = (express)=>{
   let route = express.Router();
   route.get('/', (req, res)=>{
      res.send('Guest Router is running')
   })

   route.get('/home', (req, res)=>{
      res.send('Guest Home Router is running')
   })
   return route;
}

module.exports = {
   guest
}