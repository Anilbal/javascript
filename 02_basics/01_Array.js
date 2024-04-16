// Array
// Array object is the collection of different data types with a single variable name like myArr below  
// JavaScript array-copy operations create shallow copies means it changes the original value if we make changes in copy array
// Array is resizable means we can add more values or data like line no.9
// Array can take any elements or datatypes like array itself ,object,string,number,boolean etc

let myArr=[1,2,3,"anil",true]
console.log(typeof myArr) //output will be object

myArr.push(6) //ADD NEW values 9 in array
console.log(myArr) //output will be [1,2,3,"anil",true,6] it add new values 

myArr.pop() //it will remove last added or last array i.e 6 from list
myArr.unshift(5) //it will be add my 5 values in the starting position of myArr list
myArr.shift() //it will remove my first index value of an array i.e 1 


console.log(myArr.includes(10)) //it checks if 10 is included or not if included then it say true else false
console.log(myArr.indexOf(4))  //it checks if there is value indexOf 4 position or not if yes it gives value like true of myArr else -1 if not 


const myNewArr=myArr.join()

console.log(myNewArr) //it will join my value and covert into strings

const myFirstArray=[0,1,2,3,4,5]
console.log(myFirstArray.slice(1,3)) 
/* here while using slice it takes array from index 1 and 2 but doesnt includes 3 and as well it takes copy of original array and
    doesnt change it original array and print output as [1,2]
*/
console.log("A ", myFirstArray) //output will be [0,1,2,3,4,5]

console.log(myFirstArray.splice(1,3))
/* here while using splice it takes array from index 1 to 3  and as well it takes value of original array and
    makes  changes to  its original array and print output as [1,2,3]
*/
console.log("B ", myFirstArray) //output will be [0,4,5]


const firstArray=[0,2,4,6]
const secArray=[1,3,5,7]

// firstArray.push(secArray)
// console.log(firstArray)
// output will be [ 0, 2, 4, 6, [ 1, 3, 5, 7 ] ] ,it takes secArray as a single index

// const thirdArray=firstArray.concat(secArray)
// console.log(thirdArray)
//output will be [ 0, 2, 4, 6,1, 3, 5, 7], it will add all values into single array 


//we can add two array also by using spread operator
const thirdArray=[...firstArray,...secArray]
console.log(thirdArray)
//output will be as concat values


const lastArray=[1,2,3,[4,5],6,7,[3,5,6,[2,3]]]
const flatArray=lastArray.flat(3) //flat method Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(flatArray)
/*
output will be [
  1, 2, 3, 4, 5,
  6, 7, 3, 5, 6,
  2, 3
]
*/


console.log(Array.isArray("Anil")) //check if that 'Anil ' is array or not if yes it says true else false
console.log(Array.from("Anil")) //it will change my "ANil" into array type


let array1=100
let array2=200
let array3=300
console.log(Array.of(array1,array2,array3)) //it will convert my all number into array as [100,200,300]