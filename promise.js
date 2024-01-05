// @ts-nocheck

const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('async task complete');
        resolve()
    },1000)
})

promiseOne.then(function () {
    console.log('promise consume');
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('asyn taks 2');
        resolve()
    },3000)
}).then(function () {
    console.log('asnk task complete');
}) 

const promisethree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({username: 'mk',email:'mk@.com'})
    },6000)
})
promisethree.then(function (user) {
    console.log(user);
})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username:'das',id: 'mk12da'})
        } else {
            reject('Error:something went worng')
        }
    },9000)
})

promiseFour.then((user) => {
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log(' finily promise is resolve or reject'))


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({username:'js', liblary:'React'})
        } else {
            reject('js went worng')
        }
    },12000)
})

async function cosumepromiseFive(){
    try {
        const responce = await promiseFive;
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
}
cosumepromiseFive()


async function getAllUser() {
    try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await responce.json()
        console.log(data[0]);

        
    } catch (error) {
        console.log('e:',error);
        
    }
}

getAllUser()



fetch("https://api.github.com/users/hiteshchoudhary")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));


