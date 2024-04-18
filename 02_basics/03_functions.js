function myName(){
    console.log("Anil")
}

myName //if no paranthesis then it is reference 
myName() //if yes it is a excution of function

function addTwoNumbers(num1,num2){
    console.log(num1+num2)
}

addTwoNumbers() //if there is blank paranthesis then it will give NaN as output because it doesnt know what value is there 
addTwoNumbers(3,4) //output will be 7
addTwoNumbers(3,"4") //output will be 34 because it takes values as a string

function addThreeNUm(num1,num2,num3){ //here in paranthesie value passed is called paramters
    console.log(num1+num2+num3)
}
addThreeNUm(3,4,"5") //here in paranthesis value passed is called arugment

function userLogged(username){
    if(!username){
        return
    }
    return `${username} just logged in`
}
userLogged("ANil") //there wont be any output because code has been executed but havent been printed
console.log(userLogged("Anil")) //output will be Anil just logged in


function addToCart(...num1){ //here ...num1 is rest operator
    return num1
}
console.log(addToCart(2,3,4,5,56,65)) 
//output will be return in array as [2,3,4,5,56,65]

// how to use object in function
const user={
    username:"Anil",
    email:"Isemail"
}

function handleObject(anyObject){
    return `${anyObject.username} is good coder and his email is ${anyObject.email}`
}

console.log(handleObject(user))


//how to use array in functions
const myArry=[100,200,300,400]

function hanldeArray(anyArray){
    return anyArray[3]
}
console.log(hanldeArray(myArry))