//Objects  in js

function createUser(username,score){
	this.username=username
	this.score=score
}

createUser.prototype.increment=function(){
	this.score++ //here this is method to specify which function needs it ,they can user
}

createUser.prototype.printMe=function(){
	console.log(`Score is ${this.score}`)
}

const anil=createUser("Anil",25)
const shijal=createUser("SHIJAL",35)


/*
here's what happens behind the scenes when the new keyword is used:

A new object is created: the new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This
means that it has access to properties and method defined on the constructor's prototype.

The constructor is called :The 	constructor function is called with specified arguments and this is bound to the newly 
created object. If no explicit return value is specified with the constructor, js assumes this, the newly created object , 
to be the intended return value.

finally, the new object is returned : After the constructor function has been called , if it doesn't return a non-primitive 
value(object, array, function etc.) , the newly created object is returned.

*/
