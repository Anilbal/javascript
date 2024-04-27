// Javascript is a synchronous and single threaded language 
/*
##Synchronous means execution of code in sequential order i.e line by line .
for example:

console.log("Start");
console.log("Middle");
console.log("End");

Here ,code execute from start console to end console one by one 

##Single Threaded:-In a single-threaded program, there is only one execution path. This means that tasks are processed sequentially, one after another. If one task is running, all other tasks must wait until it completes. JavaScript, for instance, is single-threaded by default in web browsers, meaning that only one task is executed at a time on the main thread.

*/

//## Blocking code vs non-blocking code 
//==> blocking code means block the flow of program until other function or data is executing
//==>Non-blocking code means doesnt block the flow of program  and  works entirely even other function is executing

//setTimeout() & setInterval() both are function of web browser not of core js

//setTimeout() is a function  used to schedule a function to run after a specified delay in milliseconds. It allows you to execute a piece of code asynchronously after a certain amount of time has passed.

//setInterval() is a function  used to repeatedly execute a function or a piece of code at specified intervals. It's similar to setTimeout(), but instead of running the function once after a delay, setInterval() continues to run the function repeatedly, with a specified time delay between each execution.

//ClearTimeout() is function used to cancel or clear setTimeout() function .it should be used before timeout function is executed
// other wise it wil execute 