const myObj = {};

Object.defineProperty(myObj, 'name', {
    // value: 'George',
    // writable: false

    get() { return this._name},

    set(value) { this._name = value; },

    enumerable: true
});

console.log('Before: ', myObj.name);
myObj.name = 'GGGGG';
console.log('After: ', myObj.name);