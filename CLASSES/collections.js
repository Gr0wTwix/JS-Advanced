const myMap = new Map();
myMap.set('foo', '1-555-4981');
myMap.set('reee', '2-555-6666');

// for (let entry of myMap) {
    // console.log(entry);
// };

// console.log(Array.from(myMap));
// console.log(myMap.values());

let sorted = Array.from(myMap).sort((a, b) => a[1] - b[1]);
console.log(sorted);
