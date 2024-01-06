class user {
    constructor (email,pass) {
        this.email = email
        this.pass =pass
    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }
    get pass() {
        return `${this._pass.toUpperCase()}mik` 
    }
    set pass(value) {
        this._pass = value
    }
}

const info = new user('mk@gmail.ai', 'abc123')
console.log(info.email);
console.log(info.pass);