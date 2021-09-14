class MyClass {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} say hi!`);
    }
}

const myLiteral = {
    name: 'George',
    sayHi() {
        console.log(`${this.name} say hi!`);
    }
};

const myInstance = new MyClass('Peter');
const otherLiterals = new MyClass('John');
// console.log(myLiteral);
// console.log(myInstance);
// console.log(otherLiterals);
const myFunc = myInstance.sayHi.bind(myInstance);
myInstance.sayHi();
otherLiterals.sayHi();
myFunc();
myLiteral.sayHi();