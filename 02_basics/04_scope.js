// block and global scope in js
// block scope means variables is dependent on between block i.e inside of {}
//global scope means variable is not depentdent inside of block {} and other outside scope

//defining block and global scope with keywords
//var
var a=10
{
    var a=20
    console.log(a) //output will be 20
} 
console.log(a)  //output will be 20
//in var ,variables doesnt relay on block scope

//let 
let b=10
b=20
{
    let b=30
    console.log(b) //output will be 30
}
console.log(b) //output will be 20
//in let ,block scope matter i.e inside of block that b doesnt look over outside of its and doesnt depend also


//const 
const c=20
{
    const c=40
    console.log(c) //output will be 40
}
console.log(c) //output will be 20
//const also relay on block scope 


//scope with functions
function one(){
    const a="Anil"
    function two(){
        const b="Bal"
        console.log(a) //it will print a value
    }
    console.log(b) //it will throw an error
    two()

}
one()

//in function child can take parents variable but child variable cant be taken by it parent


//scope using conditional statement
if(true){
    const name="Anil"
    if(name==="Anil"){
        const last="bal"
        console.log(name+last) //output will be Anil Bal
    }
    console.log(last)  //itwill throw an error
}
console.log(name) //it will throw an error


//function hositing

console.log(addTwo(5)) //output will be 6 without an error
function addTwo(num){
    return num+1
}


console.log(addTwo(5)) //it will throw error as in this declaration variable is excuted before declaration 
const addNum=function(num){
    return num+1
}
