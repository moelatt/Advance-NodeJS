let arr = ["Mg Mg", "Aung Aung", "Su Su"];

// for of loop
for(let i of arr){
   console.log(i);
}
console.log('\n')
// for in loop
for(let i in arr){
   console.log(arr[i]);
}
console.log('\n')
// for each loop
arr.forEach((value)=>{
   console.log(value);
})