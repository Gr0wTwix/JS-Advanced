function solve(myArr, step) {
    let i = 0;
    let myotherArr = [];
    while (i < myArr.length) {
        myotherArr.push(myArr[i]);
        i += step;
    }
    return myotherArr;
}
solve(["5", "20", "31", "4","20"], 2);