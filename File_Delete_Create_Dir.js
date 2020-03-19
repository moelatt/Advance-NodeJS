let fs = require('fs');

fs.writeFileSync("test2.txt", "hello world")

// delete file 
fs.unlink("test2.txt", function(err){
   if(err)
      console.log(err)
   else
      console.log("File delete successfully!!!")
});   
// make new folder
fs.mkdir("test_folder", function(err){
   if(err)
      console.log(err)
   else
      console.log('Successfully created new folder')
})
// delete folder
fs.rmdir('test_folder', function(err){
   if(err)
      console.log(err);
   else
      console.log("Successfully remove the folder")
})