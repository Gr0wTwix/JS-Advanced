function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function () {
    console.log(`${this.name} says Hi`);
};

function Employee(name, salary) {
    Person.call(this, name);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.collectSalary = function () {
    console.log(`${this.name} collected ${this.salary}`);
};

const myEmployee = new Employee('pete', 8000);
console.log(myEmployee);
myEmployee.collectSalary();
myEmployee.sayHi();