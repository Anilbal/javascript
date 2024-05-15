class User{
    constructor(username){
        this.username=username
    }
    log(){
        console.log(`Username is ${this.username}`)
    }
}

class NewUser extends User{
    constructor(username,email,pass){
        super(username)
        this.email=email
        this.pass=pass
    }
    newCourse(){
        console.log(`New course by ${this.username}`)
    }
}

const newTeacher=new NewUser('Anil',"anil@112","123")
newTeacher.newCourse()