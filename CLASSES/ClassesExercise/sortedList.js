class List {
    constructor(array = []) {
        this.array = array;
        this.size = this.array.length;
    }

    add(number) {
        this.array.push(number);
        this.array.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (this.array.length > index && !(index < 0)) {
            this.array.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (this.array.length > index && !(index < 0)) {
            return this.array[index];
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
