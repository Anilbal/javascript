let myDate=new Date()
console.log(myDate)

console.log(typeof myDate) //it will be object
console.log(myDate.toString()) //output will be Tue Apr 16 2024 08:19:16 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) //output will be Tue Apr 16 2024
console.log(myDate.toLocaleString()) //4/16/2024, 8:22:01 AM
console.log(myDate.toLocaleDateString()) //4/16/2024

// let myNewDate=new Date(2023,0,12)
let myNewDate=new Date("2023-01-15")
console.log(myNewDate.toDateString()) //output will be  Thu Jan 12 2023
/*
 as we notice in myNewDate variable ,we give 2023 a year, 0 a month and 12 as a day 
 in js months start will be 0 not as a 1
*/

let timeStamp=Date.now()
console.log(timeStamp) //it will print value in miliseconds
console.log(myNewDate.getDay()) //it will convert my time into miliseconds 
// !note
// always compare your time in miliseconds


console.log(Math.floor(Date.now()/1000)) //converting my time into seconds

let myDates=new Date()
console.log(myDates.getDay()) //it will start from monday
console.log(myDates.getMonth()) // months starts from 0 

// we can customize our time by 
myDates.toLocaleString("default",{
    weekday:"long",
})