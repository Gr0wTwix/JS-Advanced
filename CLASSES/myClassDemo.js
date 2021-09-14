class MyClass {
    constructor() {
        this.name = 'Static class';
    }

    static myStaticClass() {
        console.log('from static method');
    }
}
MyClass.staticname = 'Static class';
MyClass.myStaticClass();
const myInstance = new MyClass();
console.log(myInstance);