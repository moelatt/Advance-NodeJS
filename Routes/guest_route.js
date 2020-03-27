module.exports = (express)=>{
   let route = express.Router();
   route.get('/', (req, res)=>{
      res.send({data: 'Guest Router is Running'})
   })
   route.get('/about', (req, res)=>{
      res.send({data: 'Guest router about page is running!!'})
   })
   return route;
}