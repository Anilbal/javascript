// generally strings are declared using ''or " " or ``


const name="ANil"
console.log(`My name is ${name}`) // this type declaration is called string interpolation

// next way of declaring string is 
const nameTwo=new String ('Hello') 
console.log(nameTwo)
console.log( typeof nameTwo)
console.log(name.length)
/*
output will be:
[String: 'Hello']

its type is object string

*/

console.log(name.slice(-4,2))
const myName="My name is Anil"

// console.log(name.length) => it gives length of that string
// console.log(name.toUpperCase()) =>it changes my string to uppercase like it would be ANIL
// console.log(name.charAt(3)) => it gives at what position my which value is located like charAt(3) it gives L
// console.log(name.indexOf("i")) => it gives position of my i located in stack
// console.log(name.subString(0,3)) => it will print ANI i.e it starts from 0 index and goes to 3 index
// console.log(name.slice(-4,2)) => it will start from -4 and goes to 2 index i.e AN
// console.log(name.trim()) => it will trim unneccessary spaces for example : string="  name" it will remove unnecssary space and gives only "name"
// console.log(name.replace('i','t')) =>it will replace i to t i.e it will give Antl
// console.log(name.includes("n")) =>it check if n is their or not if yes then give true else false 
// console.log(myName.split(" ")) =>it will split myName string based on space and gives values as an array i.e ["My", "name" ,"is","Anil"]



const number=100
const newNumber=new Number(100)
console.log(typeof number)
console.log(typeof newNumber)