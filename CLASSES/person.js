class Person {
    constructor(firstname, lastname, age, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstname} ${this.lastname} (age: ${this.age}, email: ${this.email})`;
    }
}

const myPerson = new Person('Anna','Simpson',22,'anna@abv.bg');
console.log(myPerson.toString());
console.log('' + myPerson);

console.log(myPerson instanceof Person);