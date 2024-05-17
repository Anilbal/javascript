// A closure is created when a function is defined inside another function, and the inner function has 
//access to the outer function's variables. Even after the outer function has finished executing, the 
//inner function retains access to the outer function's variables.


//lexical scope
// function outer(){
//     let username="anil"
//     function inner(){
//         console.log("Inner", username) //it will get username 
//     }
//     inner()
// }
// outer()
// console.log("Outer", username) //it will throw an error


//closures
// function makeFunc(){
//     const name="anil"
//     function displayName(){
//         console.log(name)
//     }
//     return displayName //sending reference of whole displayName with parent function variables
// }

// const newFunc=makeFunc()
// newFunc() //it will be anil


//bg change using closures
function clickChange(color){
   return function(){
        document.body.style.backgroundColor=`${color}`
    }
}

document.getElementById("green").onclick=clickChange('green')
document.getElementById("red").onclick=clickChange('red')
