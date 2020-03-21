let qr = require('qr-image');
let fs = require('fs');

let encoding = process.argv[2];
let image_file_name = process.argv[3];
let qr_image = qr.image(encoding, {type: 'png', size : 20});

qr_image.pipe(fs.createWriteStream(image_file_name))

// need argument input
// node QR_image.js 'hello world' qr_image.png 