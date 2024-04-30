// object literal means literally it is an object or should be an object

const user={
    username:"ANIL",
    age:21,
    isStudent:true,
    getMyName:function(){
        console.log(`${this.username}`)
    }
}
console.log(user.getMyName())


//constuctor function :- constructor functions are functions used as templates for creating multiple objects with similar 
//properties and methods. When a constructor function is called with the new keyword, it creates and initializes a new object based on the structure 
//defined within the constructor function.

//we generally use new keyword to make new function .For example:

function User(username,age,isStudent){
    //here this.username is a variable declartion
    this.username=username;
    this.age=age;
    this.isStudent=isStudent;
    return this
}

// const userOne=User("anil",12,true)
// const userTwo=User("shijal",15,false)
// console.log(userOne) //if we print userone it will overwrite  with userTwo value so do method of constructor function 

// using new keyword makes it unique and different object from each other
const userOne=new User("anil",12,true)
const userTwo=new User("shijal",15,false)
console.log(userOne)