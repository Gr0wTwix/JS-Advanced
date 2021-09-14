class Circle {
    constructor(r) {
        this.r = r;
    }

    getDiameter() {
        return this.r*2;
    }

    set diameter(value) {
        this.r = value/2;
    }
}

const myCircle = new Circle(3);
// console.log(myCircle);
// console.log(myCircle.getDiameter());

// myCircle.r = 5;
// console.log(myCircle.getDiameter());

myCircle.diameter = 8;
console.log(myCircle.r);