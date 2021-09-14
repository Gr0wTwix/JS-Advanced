const myCollection = {};

Object.defineProperty(myCollection, 'size', {
    enumerable: false,
    get: function () {
        return Object.keys(this).length;
    }
});

myCollection['John'] = '+1-555-7891';
myCollection['Peter'] = '+1-555-3456';
myCollection['May'] = '+1-555-6345';

console.log(myCollection.size);

for (let key in myCollection) {
    console.log(key, myCollection[key]);
}

console.log(myCollection);