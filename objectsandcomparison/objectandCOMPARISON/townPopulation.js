function townPopulation(array) {
    let myObject = {};
    while (array.length > 0) {
        let myOtherArray = array.shift().split(' <-> ');
        if (myObject.hasOwnProperty(myOtherArray[0])) {
            myObject[myOtherArray[0]] += Number(myOtherArray[1]);
        } else {
            myObject[myOtherArray[0]] = Number(myOtherArray[1]);
        }
       
    }
    
    for (let key in myObject) {
        console.log(`${key} : ${myObject[key]}`);
    }
}
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);