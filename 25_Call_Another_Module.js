let call_hello_func = require('./test_folder/index');
let password_encode_compare = require('./Password_Encode_Decode');

(call_hello_func.hello_func('Moe'));

password_encode_decode.encode('123')
   .then(encoded=> password_encode_compare.compare('123', encoded))
   .then(result => console.log(result))
   .catch(err => console.log(err));