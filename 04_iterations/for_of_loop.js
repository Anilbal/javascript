// for of loop
/*
SYNTAX:
for (variable of iterable) {
    // code block to be executed
}
*/


//for of loop with array
let arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(`value is ${num}`)
}

//for of loop with strings
let myName="ANil Bal"
for(const name of myName){
    console.log(`Each words of my name :${name}`)
}


//for of loop with strings
let myString={name:"Anil",age:23,isAdult:true}
for(const str of Object.entries(myString)){
    // console.log(str)
}

//map 
// it is a data structure that allows you to store key-value pairs where both the keys and the values can be of any data type
//it holds unique key value and doesnt add same keys value both time or doesnt make double keys of same name

const myMap=new Map()
myMap.set("Np","Nepal")
myMap.set("IN","India")
myMap.set("Qt","Qatar")

console.log(myMap)
for(const [key,value] of myMap){
    console.log(key +'='+value)
}