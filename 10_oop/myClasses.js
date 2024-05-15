class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeName(){
        return `${this.username.toUpperCase()}`
    }
}

const newUser=new User('anil',"anil@123",'1234')
console.log(newUser.encryptPassword())
console.log(newUser.changeName())