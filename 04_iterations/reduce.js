/*
//reduce 
The reduce() method in JavaScript is used to reduce the elements of an array to a single value.
 It executes a provided function for each value of the array (from left to right) and accumulates the single  result.
*****SYNTAX******
array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

*******Basic example*********
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);
*/

//reduce with simple function
const num=[1,2,3,4]
// const myNum=num.reduce(function(acc,cur){
//     return acc+cur
// },0)

//reduce with arrow function
const myNum=num.reduce((acc,cur)=>acc+cur,0)

console.log(myNum)


//example with real world

const shops=[
    {
        item:"pants",
        price:1000
    },
    {
        item:"shirt",
        price:500
    },
    {
        item:"huddy",
        price:4000
    },
    {
        item:"shoes",
        price:3000
    },
    {
        item:"jacket",
        price:5000
    },
]

const total=shops.reduce((acc,cur)=>acc+cur.price,0)
console.log(total)