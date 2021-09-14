function solve(unsortedArr) {
    let output = [];
    let myArr = meanderArray(unsortedArr);
    return myArr;

    function meanderArray(unsorted) {
        let sorted = unsorted.sort((a, b) => a - b);
        while (sorted.length > 0) {
            output.push(sorted.shift());
            output.push(sorted.pop());
        }
        return output;
    }
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);