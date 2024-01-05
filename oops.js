// object litreals

const user = {
    username: 'mithlesh',
    loginCoun: 10,
    signin: true,
    getUserDetails: function () {
        console.log(`username is: ${this.username}`);
        console.log(this);
    }

}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);



// promise in function

function User(username, loginCount, islogin) {
    this.username = username;
    this.loginCount = loginCount;
    this.islogin = islogin;
    // return this
}

const userOne = new User('mk', 2, true)
const userTwo = new User('das', 4, false)
console.log(userOne.constructor);
console.log(userOne instanceof User);
// console.log(userTwo);