/* emitter create with (.on(para1, para2)) and 
   if emit is call use (.emit(input for para1)) */
let event = require('events');

let my_emitter = new event.EventEmitter();

my_emitter.on("start",(job, name)=>{
   console.log(`emitter is on ${job} ${name}`);
} )
let i = 0;
let interval = setInterval(() => {
   i = i + 1;
   if( (i % 3) == 0){
      my_emitter.emit("start", "developer", "Moe");
   }
   else if(i == 7){
      clearInterval(interval);
   }
   else{
      console.log("emitter is off");
   }
}, 1000);