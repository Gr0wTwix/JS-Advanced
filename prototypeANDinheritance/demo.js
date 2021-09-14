const myObj = {
    name: 'Peter',
    age: 21
}

console.log(Object.getOwnPropertyDescriptor(myObj, 'name'));
Object.defineProperty(myObj, 'lastname', {
    value: 'Jackson',
    writable: true,
    enumerable: true,
    configurable: true
});

for (let key in myObj) {
    console.log(key);
}
// myObj.name = 'John';