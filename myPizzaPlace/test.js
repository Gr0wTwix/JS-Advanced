const pizza = require('./pizza');
const expect = require('chai').expect;

describe("My tests", function () {
    describe("makeAnOrder", () => {
        let onlyPizza = { orderedPizza: 'pizza' };
        let bothPizzaAndDrink = { orderedPizza: 'pizza', orderedDrink: 'drink' };
        let onlyDrink = { orderedDrink: 'drink' };
        let nothingBoth = {};
        it("testing", () => {
            expect(pizza.makeAnOrder.bind(pizza, onlyDrink)).to.throw(`You must order at least 1 Pizza to finish the order.`);
            expect(pizza.makeAnOrder.bind(pizza, nothingBoth)).to.throw(`You must order at least 1 Pizza to finish the order.`);
        });
        it("testing for other result", () => {
            expect(pizza.makeAnOrder(onlyPizza)).to.equal(`You just ordered pizza`);
        });
        it("testing for other result", () => {
            expect(pizza.makeAnOrder(bothPizzaAndDrink)).to.equal(`You just ordered pizza and drink.`);
        });
    });

    describe("getRemainingWork", () => {
        let myArray = [
            { pizzaName: "badPizza", status: 'ready' },
            { pizzaName: "Pepperoni", status: 'preparing' },
            { pizzaName: "Italiano", status: 'preparing' },
            { pizzaName: "Kepasa", status: 'ready' }
        ];
        let myThirdArray = [
            { pizzaName: "Pepperoni", status: 'preparing' },
            { pizzaName: "Italiano", status: 'preparing' },
        ];
        let mySecondArray = [
            { pizzaName: "badPizza", status: 'ready' },
            { pizzaName: "Pepperoni", status: 'ready' },
            { pizzaName: "Italiano", status: 'ready' },
            { pizzaName: "Kepasa", status: 'ready' }
        ];
        it("length of remaining", () => {
            expect(pizza.getRemainingWork(myArray)).to.equal(`The following pizzas are still preparing: Pepperoni, Italiano.`);
            expect(pizza.getRemainingWork(myThirdArray)).to.equal(`The following pizzas are still preparing: Pepperoni, Italiano.`);
        });
        it("no length", () => {
            expect(pizza.getRemainingWork(mySecondArray)).to.equal('All orders are complete!');
        });
    });

    describe('orderType', () => {
        it('type of orderType', () => {
            expect(pizza.orderType(50,'Carry Out')).to.equal(45);
        });
        it('type of orderType', () => {
            expect(pizza.orderType(50,'Delivery')).to.equal(50);
        });
    });
});
