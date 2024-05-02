// Call 

function setUsername(name){
    this.name=name
}

function createUser(name,email,password){
    setUsername.call(this, name)
    this.email=email
    this.password=password
}

const myName=new createUser("anil","random@gmail.com",'12345')
console.log(myName)