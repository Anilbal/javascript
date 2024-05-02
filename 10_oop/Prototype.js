
//prototype 
//:- what the array objects or function are there in js , everything is converted to objects (prototype)

let heros=["thor","ironman","spiderman"]
let myHeros={
	spiderman:"spier web",
	thor:"Thunder",
	getPower:function(){
		console.log(`Got thor power ${this.thor}`)
}
}

Object.prototype.anil=function(){
	console.log("Anil is good")
}

Array.prototype.heyAnil=function(){
	console.log("Anil is sleeping")
}
	
heros.anil() //it will output as Anil is good because as we say everything is gonna pass through object so heros array get access to those values

//but here if i give power directly to array then 
 heros.heyAnil() // it will give output as Anil is sleeping as array has array values 
myHeros.heyAnil() //it will through an error cause we give power to array not to objects so  


//Prototypial inheritance :- it is a odd approach
const user={
	name:"USername",
	email:"username@gmail.com"
}

const teacher={
	makeVideo:true
}

const TeacherSupport={
	isAvailable:false
}

const TASupport={
	makeAss:"js ",
	fulltime:true,
	__proto__:TeacherSupport // here __proto__ method connects two function each other which is prototypical inheritance
}


//modern approach or syntax of inheritance
Object.setPrototypeOf(teacherSupport,teacher) // it makes teacherSupport get access of teacher's properties
