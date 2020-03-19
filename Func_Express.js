function name(passFunc){
   passFunc();
}

// Function Expression
var myFunc = function(){
   console.log("This is dynamic function");
}
// passing dynamic function
name(myFunc);