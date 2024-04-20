/* 
Falsy values
1.false
2.0
3.-0
4.BigInt 0n
5.""
6.null
7.undefined
8.NaN
*/

/*
 Truthy Values
 1."0"
 2.'false'
 3." " //here is one space
 4.[]
 5.{}


*/


//how to use empty [] values
const emptyArray=[]
if(emptyArray.length==0){
    console.log("Array is empty")
}


//how to use empty {} values
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}

//Nullish coalescing operator (??):null undefined
let value;
// value=5??10
value =null ?? 10??20 //it checks value if null or undefined then it will print value that comes first

console.log(value) //output will be 10


//terninary operator
//condition?true:false


