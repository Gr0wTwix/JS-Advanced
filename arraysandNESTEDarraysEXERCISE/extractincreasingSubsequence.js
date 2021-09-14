function solve(array) {
    let myArr = [];
    let biggestNumber = array.shift();
    myArr.push(biggestNumber);
    for (let i = 0; i < array.length; i++) {
        if (array[i] > biggestNumber) {
            biggestNumber = array[i];
            myArr.push(array[i]);
        }
    }

    return myArr;
}
solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )