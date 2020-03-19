let fs = require('fs');

var data = "Life suck! you have to live with it!!! \n";
let filename = 'test.txt'
// write file (filename, data, call back function)
 fs.writeFileSync(filename, data, function(err){
   if(err){
      return err
   }
   else{
      return(`Successfully write data in ${filename}`)
   }
});

let read_data = fs.readFileSync(filename, 'utf-8', function(err, result){
   if(err)
      console.log(err)
   else
      console.log(result)
})
console.log(read_data)

fs.appendFile(filename, " My life never get easily what I want ", function(err){
   if(err)
      console.log(err);
   else
      console.log("File append Successfully")
})