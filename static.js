class user {
    constructor (name) {
        this.name = name
    }

    logme() {
        console.log(`username : ${this.name}`);
    }

     static creteid() {
        return `${this.name}123`
    }
}

const chai = new user('mk')
chai.logme()
// console.log(chai.creteid());

class teacher extends user{
    constructor (username, email) {
        super(username)
        this.email=email
    }
}

const tea = new teacher('wow', 'wow@.com')

tea.logme()
console.log(tea);
// console.log(tea.creteid());