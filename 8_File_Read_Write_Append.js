let fs = require('fs')

let data = 'Hello my name is Moe and I was born in myanmar'

// writeFileSync(filename, data)
fs.writeFileSync('test.txt', data)

// read file sync(filename, encoding->UTF-8)
let read_data = fs.readFileSync('test.txt', 'UTF-8');

// file data append and write new data to current file.
fs.appendFileSync('test.txt', " I am studying Computer Science major")

read_data = fs.readFileSync('test.txt', 'utf-8')
fs.writeFileSync('test2.txt', read_data)

console.log(read_data);