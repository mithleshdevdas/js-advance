// @ts-nocheck
class user {
    constructor (username) {
        this.username = username
    }

    logme() {
        console.log(`username is ${this.username}` );
    }
}

 class teacher extends user{
    constructor (username, email, pass) {
        super(username)
        this.email = email
        this.pass =pass
     }
     addcourse() {
         console.log(`add a course ${this.username}`);
     }
}

const tea = new teacher('mith','mk@.com','123')
const chai = new user('mith','mk@.com','123')
// teacher
tea.addcourse()
tea.logme()
// user 
chai.logme()


