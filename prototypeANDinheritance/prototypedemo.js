function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.write = function(message) {
    console.log(`${message}`);
};

const myPerson = new Person('John','Abbot');
console.log(myPerson);
myPerson.write('hello world!'); 
