//filter =>  method accepts a callback function as an argument, method to create a new array with all elements 
// const myArray=[1,2,3,4,5,6,7,8,9,10]
// const newArr=myArray.filter(num=>{
//     if(num>5){
//         return num
//     }
// })
// console.log(newArr)


const randomArray = [
    { name: "John", age: 25, city: "New York" },
    { name: "Alice", age: 30, city: "Los Angeles" },
    { name: "Bob", age: 28, city: "Chicago" },
    { name: "Emily", age: 22, city: "San Francisco" },
    { name: "John", age: 25, city: "New York" },
    { name: "Alice", age: 30, city: "Los Angeles" },
    { name: "Bob", age: 28, city: "Chicago" },
    { name: "Emily", age: 22, city: "San Francisco" }
];

const newName=randomArray.filter((item)=>{
    return item.age>=25 && item.name==="Bob"
})
console.log(newName)