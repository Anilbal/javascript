//for in loop
/*
SYNTAX:
for (variable in object) {
    // code block to be executed
}
*/

//for in loop with objects
// const obj={
//     name:"ANil",
//     age:23,
//     edu:"Bachelors"
// }
// for (const key in obj) {
//     console.log(`${key} is ${obj[key]}`)
// }


//for in loop with array
 const arr=["1","2","3","4","5"]

 for(const key in arr){
    // console.log(key) //output will be 0,1,2,3,4 it will print keys or index of arrays
    console.log(arr[key]) //it will print values of array 
}

//in for in loop map cant be iteratable 