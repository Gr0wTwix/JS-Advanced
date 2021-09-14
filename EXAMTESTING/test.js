const expect = require('chai').expect;
const numberOperations = require('./numberOperations');

describe("Tests", () => {
    describe("powNumber tests", () => {
        it("is it correct", () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
        });
        it("is it correct", () => {
            expect(numberOperations.powNumber(4)).to.equal(16);
        });
        it("is it correct", () => {
            expect(numberOperations.powNumber(10)).to.equal(100);
        });
        it("is it correct", () => {
            expect(numberOperations.powNumber(126)).to.equal(15876);
        });
    });

    describe("numberChecker", () => {
        it("Its number", () => {
            expect(numberOperations.numberChecker(3)).to.equal('The number is lower than 100!');
        });
        it("Its number", () => {
            expect(numberOperations.numberChecker(543)).to.equal('The number is greater or equal to 100!');
        });
        it("Its number", () => {
            expect(() => {
                numberOperations.numberChecker("word");
            }).to.throw('The input is not a number!');
        });
    });

    describe("sumArrays", () => {
        it("correct summing", () => {
            let array1 = [1,2,3,4,5];
            let array2 = [64,53,85];
            expect(numberOperations.sumArrays(array1,array2)).to.deep.equal([65,55,88,4,5]);
        });
        it("correct summing", () => {
            expect(numberOperations.sumArrays([4,34,54,4,5],[438,123,299])).to.deep.equal([442, 157, 353, 4, 5]);
        });
        it("correct summing", () => {
            let array1 = [1,2,3];
            let array2 = [64,53,85,4234];
            expect(numberOperations.sumArrays(array1, array2)).to.deep.equal([65, 55, 88, 4234]);
        });
    });
});