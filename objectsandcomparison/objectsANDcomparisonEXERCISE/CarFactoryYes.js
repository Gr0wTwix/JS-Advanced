function myCarFact(myObject) {

    function getEngine(power) {
        const engines = [
            { power: 90, volume: 1800},
            { power: 120, volume: 2400},
            { power: 200, volume: 3500}
        ];
        let result;
        for (let i = 0; i < engines.length; i++) {
            if (engines[i].power >= power) {
                result = engines[i];
                break;
            }
        }
        return result; // engines.find(el => el.power >= power);
    }

    function getCarriage(carriage,color) {
        return {
            type: carriage,
            color
        }
    }

    function getWheels(wheelsize) {
        if (Math.floor(wheelsize) % 2 == 0) {
            wheelsize -= 1;
            return new Array(4).fill(wheelsize);
        } else {
            return new Array(4).fill(wheelsize);
        }
    }

    return {
        model: myObject.model,
        engine: getEngine(myObject.power),
        carriage: getCarriage(myObject.carriage, myObject.color),
        wheels: getWheels(myObject.wheelsize)
    };
}
console.log(myCarFact({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));