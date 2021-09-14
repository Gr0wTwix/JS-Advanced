function solve(myNumber) {
    myNumber = String(myNumber);
    let isItthesame = myNumber[0];
    let istrue = true;
    let sum = 0;

    for (let i = 0; i < myNumber.length; i++) {
        if (myNumber[i] !== isItthesame) {
            istrue = false;
        }
        sum += Number(myNumber[i]);
    }

    console.log(`${istrue}\r\n${sum}`); 
}
solve(2222222)