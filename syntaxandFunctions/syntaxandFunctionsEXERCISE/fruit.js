function calculateMoney(type,weight,perKG) {
    let myKG = weight/1000;
    let mySum = myKG*perKG;
    console.log(`I need $${mySum.toFixed(2)} to buy ${myKG.toFixed(2)} kilograms ${type}.`);
}
calculateMoney('orange', 2500, 1.80);