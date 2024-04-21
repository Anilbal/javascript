//for loop 
/*
SYNTAX:
for(initialization;condition;increment or decrement;)
*/
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element)
// }
//output will be 0 ,1,2,3,4,5,6,7,8,9
/*
 Here, it check condition first .firstly index value is printed and again condition is checked ,compare index i.e less than 10
 and increase value .it goes on and meet at index 10 then checks if 10 <10 it return false so execution is stop there at index 10
*/



//nested for loop i.e inside of for loop making another for loop
// for(let i=1;i<=10;i++){
//     console.log(`Value of i: ${i}`)
//     for(let j=1;j<=10;j++){
//         console.log(i+"*"+j+" = "+ i*j)
//     }
// }


//for loop with array
// let  myArray=["anil","shijal","shushil"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)
// }



//break and continue

//break 
// for (let index = 0; index < 20; index++) {
//     if(index==5){
//         console.log('Detected 5')
//         break; // exits the loop when index is equals 5
//     }
//     console.log(`Value of i : ${index}`)
// }


//continue 
for (let index = 0; index < 10; index++) {
    if(index==5){
        console.log('Detected 5')
        continue; // skips the iteration when index is  equals 5 ,it ignore value when index is 5
    }
    console.log(`Value of i : ${index}`)
}