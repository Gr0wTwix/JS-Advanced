function solve(array,myNumber) {
    for (let i = 0; i < myNumber; i++) {
        let myRotate = array.pop();
        array.unshift(myRotate);
    }

    console.log(array.join(` `));
}
solve(['1', 
'2', 
'3', 
'4'], 
2
);