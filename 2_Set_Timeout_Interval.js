/* setTimeout need 2 parameter and call function 
   after second parameter Time finish */
setTimeout(()=>{
   console.log("My name is moe");
}, 1000)

/* setInterval need 2 parameter and call function 
   every second parameter input time */
   let i = 0;
 let interval = setInterval(()=>{
                  if(i == 5){
                     clearInterval(interval)
                  }
                  else{
                     console.log(`Hello world ${i}`)
                  }
                  i = i + 1;
               }, 1000)