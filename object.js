// function multiByFive(num) {
//     return num*5
// }
// multiByFive.power =2
// console.log(multiByFive(5));
// console.log(multiByFive.power);
// console.log(multiByFive.prototype);

function createUser(username, score) {
    this.username = username
    this.score=score
}

createUser.prototype.increment = function () {
    this.score++
}

createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
}
const chai = new createUser('chai', 25)
// console.log(chai);
const tea =  new createUser('tea', 250)
// console.log(tea);

chai.printMe()
tea.printMe()




  