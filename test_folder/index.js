let call_welcome_func = require('./test2_folder/welcome')

exports.hello_func = (user)=>{
   console.log('Hello world ' , user, ". " ,call_welcome_func.welcome_func());
}