class Hex {
    constructor(myValue) {
        this.value = Number(myValue);
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    valueOf() {
        return this.value;
    }

    plus(myN) {
        let result = (this.value + Number(myN.valueOf()));
        return new Hex(result);
    }

    minus(myN) {
        let result = (this.value - Number(myN.valueOf()));
        return new Hex(result);
    }

    parse(myString) {
        return parseInt(myString, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
