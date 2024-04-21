/*for each  ,it is not a loop it is a method
it is a method is available for arrays, which allows you to iterate over each element of an array and 
perform a specified action for each element.
*/
//SYNTAX:
// array.forEach(function(currentValue, index, array) { //it ask for a call back funtion
  // code block to be executed for each element
// });


const coding=['anil','shijal','trievsh','shushil']
// coding.forEach(function(name){
    // console.log(name)
// })

//for each using arrow funtion
// coding.forEach((name)=>{
//     console.log(name)
// })

//using outer funtion
//  function printMe(name){
//     console.log(name)
//  }
// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})


const myArray=[
    {
        name:"Anil",
        lang:"Mern"
    },
    {
        name:"SHIjal",
        lang:"Python"
    },
    {
        name:'Shushil',
        lang:"Java"
    }
]

myArray.forEach((item)=>{
    console.log(item.lang)
})