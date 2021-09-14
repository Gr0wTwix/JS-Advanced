function sumArrays(array1, array2) { // 5 , 3   [1,2,3,4,5]   и   [64,53,85]

    const longerArr = array1.length > array2.length ? array1 : array2; // if yes - arr1 | if no arr2
    const rounds = array1.length < array2.length ? array1.length : array2.length; // 3

    const resultArr = [];

    for (let i = 0; i < rounds; i++) {
        resultArr.push(array1[i] + array2[i]);
    }

    resultArr.push(...longerArr.slice(rounds));

    return resultArr
}

// console.log(sumArrays([1,2,3,4,5],[64,53,85]));
// console.log(sumArrays([4,34,54,4,5],[438,123,299]));
console.log(sumArrays([1,2,3],[64,53,85,4234]));