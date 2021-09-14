// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }

//     get fullName() {
//         return `${this.firstname} ${this.lastname}`;
//     }

//     set fullName(value) {
//         const tokens = value.split(' ');
//         this.firstname = tokens[0];
//         this.lastname = tokens[1];
//     }
// }

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    Object.defineProperty(this, 'fullname', {
        enumerable: true,
        get: function   () {
            return `${this.firstname} ${this.lastname}`;
        },

        set: function (value) {
            const tokens = value.split(' ');
            this.firstname = tokens[0];
            this.lastname = tokens[1];
        }
    })
}

const myPerson = new Person('May', 'Sue');
console.log(myPerson.fullName);