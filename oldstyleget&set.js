// @ts-nocheck

function user(email, pass) {
    this._email = email
    this._pass = pass
    
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email= value
        },
    })
    Object.defineProperty(this, 'pass', {
        get: function () {
            return this._pass.toUpperCase()
        },
        set: function (value) {
            this._pass= value
        }
    })
}

const chai = new user('das@ai.com', '1c2a3')

console.log(chai.email);
console.log(chai.pass);