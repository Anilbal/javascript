//if statement
//syntax
// if(condition){
//     code 
// }

const age=18
if(age>=18){
 console.log( 'I am Adult')
}


//if else statement
//syntax
/*
    if(condtion){
        
    }else{

    }
*/

const isAdult =18
if(isAdult>=18){
    console.log("Yes i am adult")
}else{
    console.log("I am minor")
}
console.log("I am not related to if else statement") //this code is not related to conditional statement


//if else if
//syntax
/*
if(condtion){

}else if(condition){

} else{

}

*/

// conditional statement with scope 
const name="Anil"
if(name=="Anil"){
    const last='Bal'
    console.log(`My name is Mr.${last}`)
}
// console.log(`My name is Mr.${last}`) //it will create error because last variable is declared outside of a scope


// const isLoggedIn=true
// const isVerified=true
// if(isLoggedIn && isVerified){ //here && operator  checks if both statement is true then it return value true else false
//     console.log("You can shop now")
// }else{
    //     console.log("You cant shop")
    // }



// const isEmail=true
// const isGoogle=true
// const first="Anil"
// if(isEmail || isGoogle){ //here || operator  checks if one of the  statement is true then it return value true else false
//     console.log(`${first} logged in`)
// }else{
//     console.log(`${first} logged out`)
// }

