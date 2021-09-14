class Stringer {
    constructor(string, mylenght) {
        this.innerString = string;
        this.innerLenght = mylenght;
    }

    toString() {
        return this.innerLenght === 0 ? '...' : this.innerString.slice(0,this.innerLenght) + '...';
    }

    decrease (myNumber) {
        this.innerLenght -= myNumber;
        if(this.innerLenght < 0) {
            this.innerLenght = 0;
        }
    }

    increase (myNumber) {
        this.innerLenght += myNumber;
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test

