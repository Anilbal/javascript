class User{
    constructor(username){
        this.username=username
    }
    static log(){
        console.log(`Username is ${this.username}`)
    }
}

const anil=new User('anil')
console.log(anil.log()) //it will give an error cause static keyword doesnt allow to access value