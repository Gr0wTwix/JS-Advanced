function cookingaNumber(number, first, second, third, fourth, fifth) {
    number = Number(number);
    let myArr = [];
    myArr.push(first);
    myArr.push(second);
    myArr.push(third);
    myArr.push(fourth);
    myArr.push(fifth);

    for (let eachOne of myArr) {
        switch (eachOne) {
            case "chop":
                number /= 2;
                console.log(number);
                break;
            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;
            case "spice":
                number++;
                console.log(number);
                break;
            case "bake":
                number *= 3;
                console.log(number);
                break;
            case "fillet":
                number -= 0.2*number;
                console.log(number);
                break;
        }
    }
}
cookingaNumber('32','chop', 'chop', 'chop', 'chop', 'chop');