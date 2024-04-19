//immediately invoked function expressions (IIFE)
/* why we use IIFE in js
1.to create a private scope for code
2.To avoid pollution created from global scope 
3.immediate execution of code
*/

// this is name iife because we have given a name i.e myName of function
(function myName(){
    console.log(`Server created`)
})();

//simple IIFE with no name in arrow function while using passing values through paranthesis
((port)=>{
    console.log(`Database connected at ${port}`)
})(8000)
