// promise object represents any eventual completion or failure of an asychronous opertion and its resulting value
/*
A Promise is in one of these states:
1. pending: initial state, neither fulfilled nor rejected.
2. fulfilled: meaning that the operation was completed successfully.
3. rejected: meaning that the operation failed.
*/


//creating new promise 
const promiseOne=new Promise(function(resolve,reject){
    //do an async task
    // database calls,cryprography,networks calls
    setTimeout(()=>{
        console.log('Task is completed')
        resolve()
    },1000)
})

//after promise is created ,we have to consume it 
promiseOne.then(()=>{
    console.log('promise consumed');
}).catch(

)
//.then is related to resolve of promise creation
//.catch is related with reject of promise creation


//we can make promise without storing in variable too 
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(Date.now())
        resolve()
    },1000)
}).then(()=>{
    console.log("resolved")
})


//promise three
const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            username:"Anil",
            email:"anil@gamil.com",
            password:"Anil123"
        })
    },1000)
})

promiseThree.then((user)=>{
    console.log(user)
})

//promise four
const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=true
        if (!error) {
            resolve({username:"Anil",email:"anil@123"})
        } else {
            reject("error:somthing went wrong")
        }
    }, 1000);
})
promiseFour
.then((user)=>{
    return (user.username)
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})