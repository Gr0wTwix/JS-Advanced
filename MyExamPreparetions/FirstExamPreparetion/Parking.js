class Parking {
    constructor(capacityN) {
        this.capacity = capacityN;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.capacity <= this.vehicles.length) {
            throw new Error('Not enough parking space.');
        } else {
            this.vehicles.push({ carModel, carNumber, payed: false });
            return `The ${carModel}, with a registration number ${carNumber}, parked.`;
        }
    }

    removeCar(carNumber) {
        for (const curCar of this.vehicles) {
            if (curCar.carNumber == carNumber) {
                if (curCar.payed) {
                    let myIndex = this.vehicles.indexOf(curCar);
                    this.vehicles.splice(myIndex, 1);
                    return `${carNumber} left the parking lot.`;
                }
                throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
            }
        }
        throw new Error(`The car, you're looking for, is not found.`);
    }

    pay(carNumber) {
        for (const curCar of this.vehicles) {
            if (curCar.carNumber === carNumber) {
                if (curCar.payed) {
                    throw new Error(`${carNumber}'s driver has already payed his ticket.`);
                }
                curCar.payed = true;
                return `${carNumber}'s driver successfully payed for his stay.`;
            }
        }
        throw new Error(`${carNumber} is not in the parking lot.`);
    }

    getStatistics(carNumber) {
        let output = '';
        if (carNumber === undefined) {
            output += `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.\n`;
            this.vehicles
                .sort((a, b) => a.carModel.localeCompare(b.carModel))
                .forEach(curObj => {
                    let isPayed;
                    curObj.payed ? isPayed = `Has payed` : isPayed = "Not payed";
                    output += `${curObj.carModel} == ${curObj.carNumber} - ${isPayed}\n`
                })
            return output.trim();
        } else {
            for (const curCar of this.vehicles) {
                if (curCar.carNumber == carNumber) {
                    let isPayed;
                    curCar.payed ? isPayed = `Has payed` : isPayed = "Not payed";
                    return `${curCar.carModel} == ${curCar.carNumber} - ${isPayed}`;
                }
            }
        }
    }
}


const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
