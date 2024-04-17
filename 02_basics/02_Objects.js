//objects literals

//declaring symbol 
const sym=Symbol("Key1")
const newObj={
    name:"Anil", //in js name is taken as a string but while writing we use in that same form
    age:22,
    [sym]:"key1",
    isStudent:true,
    presentDays:['sunday','monday']
}

// to get values inside of objects

// first method
console.log(newObj.name) //output will be Anil

//second method this is the best method also
console.log(newObj['name']) //output will be Anil

console.log(newObj[sym]) //output will be 'key1'

// we can make changes in real object by 
newObj.name="I am Dev" //it changes original object's name
console.log(newObj)

//we can make our object not to be changed by
// Object.freeze(newObj) //it doesnt allow to make any changes in our object


//making greeting in js
newObj.greeting=function(){
    console.log(`Hello , ${this.name}`)//string interpolation
}
// console.log(newObj)
console.log(newObj.greeting())


// simpleton or object by constructor
const secObj=new Object()

secObj.name="Anil"
secObj.age=15
secObj.email='anil@.com'
console.log(secObj)



let newObject={
    fullName:{
        userName:{
            firstName:"ANil",
            lastName:"Bal"
        }
    }
}

console.log(newObject.fullName.userName.firstName)  //output will be Anil


const obj1={ 1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign({},obj1,obj2) //it will concate object 
//here in obj3 there is empty string where every others strings is added there

const object3={...obj1,...obj2}

console.log(obj3)
console.log(object3)

//how to get all keys and all values of any object 
let myObject={
    1:"aaa",
    2:'bbb',
    3:'ccc'
}
console.log(Object.keys(myObject)) //output will be ['1','2','3']
console.log(Object.values(myObject)) //output will be ['aaa','bbb','ccc']
console.log(Object.entries(myObject)) //it will change my every key and values into array
console.log(myObject.hasOwnProperty('1'))  //it checks if any key is there in selected object or not
