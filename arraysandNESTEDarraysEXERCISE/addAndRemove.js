function solve(myArr) {
    let myNumber = 1;
    let myotherArray = [];
    for (let each of myArr) {
        if (each === "add") {
            myotherArray.push(myNumber);
            myNumber++;
        } else {
            let myIndex = myotherArray.indexOf(myNumber);
            myotherArray.splice(myIndex, 1);
            myNumber++;
        }
    }

    if (myotherArray.length === 0) {
        console.log(`Empty`);
    } else {
        myotherArray.forEach(x => console.log(x));
    }
}
solve(['add', 
'add',
'remove', 
'add', 
'add']
);