function solve(myArray) {
    let log = {};
    for (let each of myArray) {
        let [townName, productName, productPrice] = each.split(' | ');
        if (!log[productName]) {
            log[productName] = {townName, price: Number(productPrice)};
        } else {
            log[productName] = log[productName].price <= Number(productPrice) ? log[productName] : {townName, price: Number(productPrice)};
        }
    }

    for (let each in log) {
        console.log(`${each} -> ${log[each].price} (${log[each].townName})`);
    }
}
solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);