// there are generally three keywords for declaring varibales i.e const ,let and var 
// but nowadays var is not used generally because of block and functional scope

// const means variable can be declared at first  but can't be changed after that . For example
// const anil="Anil"
// const anil="hello"
// if will throw error in our code because  anil variable is declared already

// let allows us let declare our varible , can't be declared its name again but its value can be changed which is also called block scope


// example of var
// var Name="anil"
// {
//     var Name="I am anil"
//     console.log(Name)
// }
// console.log(Name)
/*
it will print
I am anil 
I am anil
*/


// example of let
let Name="anil"
{
    let Name="I am anil"
    console.log(Name)
}
console.log(Name)
/*
it will print
I am anil 
anil
*/