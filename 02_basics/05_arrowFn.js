// arrow funtion in js
 const user={
    name:"Anil",
    age:23,
    isAdult:true ,
    welcome:function(){
        console.log(this) //it will print current values that is all user object
        console.log(`${this.name} , welcome to my website`)
    }
 }
 user.welcome()

 console.log(this) //output will be empty object or arguments i.e {}
 /*
    in node without declaring any globel variables it will return an empty objects {}
    but while returning  this in console in browser without declaring any global variables it will 
    return window as a this values
 */


function name(){
    let username='Anil'
    // console.log(this.username) //it will give undefined because this keyword works in object here not inside of funtion
}
name()

// arrow function declaration

const myName=()=>{

}
myName()

// const addNUm=(num1,num2)=>(num1+num2)
// console.log(addNUm(3,6)) //output will be 9

//how to return object in arrow function
const addNUm=(num1,num2)=>({username:"Anil"})

console.log(addNUm(3,6)) //output will be {username:"Anil"}
