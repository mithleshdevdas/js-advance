const setUser = function (username) {
    this.username = username
    console.log('called');
}

const createuser = function (username, email, login) {
setUser.call(this,username)

    // this.email = email
    this.login = login
}

const chai = new createuser("mith", 'mk@gmai.com', true)

console.log(chai);