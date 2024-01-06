
// console.log(Math.PI);

const Descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(Descriptor);

const user = {
    name: 'mk',
    salary: 2500,

    changeuser() {
        console.log('chay ni banio');
    }
}
console.log(Object.getOwnPropertyDescriptor(user,"name"));

Object.defineProperty(user, 'name', {
//   writable: false,
  enumerable: true,
//   configurable: true
});
console.log(Object.getOwnPropertyDescriptor(user, "name"));

for (let [key, value] of Object.entries(user)) {
    if (typeof value !== 'function') {
        
        console.log(`${key}: ${value}`);
    }
}
// console.log(user);
