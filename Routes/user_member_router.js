module.exports = (express)=>{
   let route = express.Router();
   route.get('/home', (req, res)=>{
      res.send({data: 'Welcome from user member page!!!'});
   })
   route.get('/about', (req, res)=>{
      res.send({data: 'You are in user about page now!!!'});
   })
   return route;
}