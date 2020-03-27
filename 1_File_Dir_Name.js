
// let dir = __dirname;
// let filename = __filename;

// let data = filename.split('//')
// console.log(data.length)
// console.log(data[data.length-1])

// console.log(dir);

let dir = __dirname;
let file = __filename;
console.log(file);
let data = file.split('\\'); // print file directory without cmd string
console.log(dir);
console.log(data[data.length-1])
