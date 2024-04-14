"use strict"; //treat all js code as newer version

// there are two types of data types
/* 1) Primitive :- these immutable data types meaning they cant be modified and directlty stored in memory
    a.String="",'' & ``
    b.Number=1,2,3 etc.
    c.Boolean =true or false
    d.Null=standalone value
    e.Undefined= variable declared but does assign value
    f.Symbol=@,#
*/

/*
 2)Non primitive:- these are mutable data types and can be modified after creation and are stored as a reference in memory
 reference in memory means what's stored in memory is not the actual value but a reference to where that value is stored.
For example, if you have let obj = { name: 'John', age: 30 };, obj doesn't hold the object's value directly. Instead, 
it holds a reference (like an address) to where the object's properties are stored in memory.

  a.Object
  b.Array
  c.Functions
*/


console.log(typeof undefined)
console.log(typeof null)

// while consoling typeOf undefined it shows undefined but typeOf null shows Object as a type