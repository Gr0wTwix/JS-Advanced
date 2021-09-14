// const describe = require('mocha');
// const assert = require("chai");

let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}

module.exports = pizzUni;


// describe("My tests", function () {
//     it("makeAnOrder", () => {
//         let onlyPizza = { orderedPizza: 'pizza' };
//         let bothPizzaAndDrink = { orderedPizza: 'pizza', orderedDrink: 'drink' };
//         let onlyDrink = { orderedDrink: 'drink' };
//         let nothingBoth = {};
//         assert.throw(() => pizzUni.makeAnOrder(onlyDrink),`You must order at least 1 Pizza to finish the order.`);
//         assert.throw(() => pizzUni.makeAnOrder(nothingBoth),`You must order at least 1 Pizza to finish the order.`);
//         assert.equal(() => pizzUni.makeAnOrder(onlyPizza),`You just ordered pizza`);
//         assert.equal(() => pizzUni.makeAnOrder(bothPizzaAndDrink),`You just ordered pizza and drink.`);
//     });

//     // it("getRemainingWork", () => {
//     //     let myArray = [
//     //         { pizzaName: "badPizza", status: 'ready' },
//     //         { pizzaName: "Pepperoni", status: 'preparing' },
//     //         { pizzaName: "Italiano", status: 'preparing' },
//     //         { pizzaName: "Kepasa", status: 'ready' }
//     //     ];
//     //     let myThirdArray = [
//     //         { pizzaName: "Pepperoni", status: 'preparing' },
//     //         { pizzaName: "Italiano", status: 'preparing' },
//     //     ];
//     //     let mySecondArray = [
//     //         { pizzaName: "badPizza", status: 'ready' },
//     //         { pizzaName: "Pepperoni", status: 'ready' },
//     //         { pizzaName: "Italiano", status: 'ready' },
//     //         { pizzaName: "Kepasa", status: 'ready' }
//     //     ];
//     //     it("length of remaining", () => {
//     //         expect(pizza.getRemainingWork(myArray)).to.equal(`The following pizzas are still preparing: Pepperoni, Italiano.`);
//     //         expect(pizza.getRemainingWork(myThirdArray)).to.equal(`The following pizzas are still preparing: Pepperoni, Italiano.`);
//     //     });
//     //     it("no length", () => {
//     //         expect(pizza.getRemainingWork(mySecondArray)).to.equal('All orders are complete!');
//     //     });
//     // });

//     // it('orderType', () => {
//     //     it('type of orderType', () => {
//     //         expect(pizza.orderType(50,'Carry Out')).to.equal(45);
//     //     });
//     //     it('type of orderType', () => {
//     //         expect(pizza.orderType(50,'Delivery')).to.equal(50);
//     //     });
//     // });
// });
