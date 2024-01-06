class User {
    constructor (username, email, pass) {
        this.username = username
        this.email = email
        this.pass = pass
    }
    securdpassworld() {
        return`${this.pass}@abc#`
    }
    changeusername() {
        return`${this.username.toUpperCase()}`
    }
}

const chai = new User('das', 'das@.com', 'd1s')
// console.log(chai.securdpassworld());
// console.log(chai.changeusername());

// behind the scean
function user(username, email, pass) {
    this.username = username
    this.email = email
    this.pass = pass
}

user.prototype.securdpassworld = function () {
    return`${this.pass}!@a`
}
user.prototype.changeusername = function () {
    return`${this.username.toUpperCase()}`
}

const tea = new user("tea", "tea@.com", '123')

console.log(tea.securdpassworld());
console.log(tea.changeusername());