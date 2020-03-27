
let name_express = function(str){
   console.log(`My name is ${str}`);
}
let major_express = (str)=>{
   console.log(`My major is ${str}`)
}
// module.exports.name_express = name_express;
// module.exports.major_express = major_express;

// using object function
module.exports = {
   name_express: name_express,
   major_express: major_express
}

