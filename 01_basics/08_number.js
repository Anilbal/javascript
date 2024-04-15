const num=100 //this is primitive number 
const newNum=new Number(100)// this is number object

console.log(typeof num) //output will be number
console.log(typeof newNum) // output will be object

console.log(newNum.toString().length) //output will be 3
console.log(newNum.toFixed(2)) //output will be 100.00
console.log(newNum.toPrecision(3)) //output will be 100

const nepNum=100000000
console.log(nepNum.toLocaleString('en-IN'))


// Maths in js

console.log(Math) //output will be  objects
console.log(Math.abs(-4)) //output it will change negative to positive but it doesnt change positive into negative it will be always positive
console.log(Math.round(4.5)) //output will be 5
console.log(Math.ceil(4.2)) //output will be 5 it see as if number is greater by only one decimal than it will set as 5
console.log(Math.floor(4.2)) //output will be 4 it see as if number is greater by any decimal than it see as equal to 4
console.log(Math.min(3,6,1,9)) //output will be 1
console.log(Math.max(5,2,7,4)) //output will be 7

console.log(Math.random()) //it will give random value every time from 0 to 1
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*6)) //it will give random values 


const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)
/*
  here in above console , Math.floor gives value expect decimal, Math.random gives random values and max-min gives values
  that is from min to max and plus 1 i.e (max-min+1 ) means value that doesnt give zero and last + min means it can give at least 
  min value 
*/