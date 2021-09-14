function solve(myArray) {
    let myOtherObject = [];
    while (myArray.length > 0) {
        let myOtherArray = {};
        let myHeroString = myArray.shift();
        let [name, level, items] = myHeroString.split(' / ');
        let myItems = items.split(`, `);
        myOtherArray.name = name;
        myOtherArray.level = Number(level);
        myOtherArray.items = myItems;
        myOtherObject.push(myOtherArray);
    }
    myOtherObject = JSON.stringify(myOtherObject)
    return myOtherObject;
}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);