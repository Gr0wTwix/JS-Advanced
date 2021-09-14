const myObj = {};

Object.defineProperty(myObj, 'name', {
    value: 'John',
    writable: true,
    enumerable: true,
    configurable: false
});

console.log(myObj);
delete myObj.name;
console.log(myObj)