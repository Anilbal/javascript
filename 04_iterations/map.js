//map 

// const myNUm=[1,2,3,4,5,6,7,8,9,10]
// const newNUm=myNUm.map((item)=>{
//     return item+2
// })
// console.log(newNUm)

//chaining 

const myNUm=[1,2,3,4,5,6,7,8,9,10]
const newNum=myNUm.map((item)=>item+1).map((item)=>item*2).filter((um)=>um>=14)

console.log(newNum)
