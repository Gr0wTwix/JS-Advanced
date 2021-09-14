const expect = require('chai').expect;
const stringOperations = require('./stringOperations.js');

describe("Tests", () => {
    describe("stringSlicer tests", () => { // Велосипед - Вел...
        it("is it correct", () => {
            expect(stringOperations.stringSlicer("Bicycle")).to.equal("Bic...");
        });
        it("is it correct", () => {
            expect(stringOperations.stringSlicer("Bi")).to.equal("Bi...");
        });
        it("is it correct", () => {
            expect(stringOperations.stringSlicer("")).to.equal("...");
        });
        it("is it correct", () => {
            expect(stringOperations.stringSlicer("Bicy")).to.equal("Bic...");
        });
    });

    describe("wordChecker", () => {
        it("Includes?", () => {
            let word = "ThiS";
            let text = "This is my sentence!";
            expect(stringOperations.wordChecker(word, text)).to.equal('this');
        });
        it("Doesn't include?", () => {
            let word = "wOrD";
            let text = "Oh My GosH, what IS tHaT?";
            expect(stringOperations.wordChecker(word, text)).to.equal(`word not found!`);
        });
        it("Includes with extras?", () => {
            let word = "BrO!";
            let text = "Not my SeNTENce bro!";
            expect(stringOperations.wordChecker(word, text)).to.equal('bro!');
        });
        it("Includes number?", () => {
            let word = "123";
            let text = "Here We GOO 123";
            expect(stringOperations.wordChecker(word, text)).to.equal('123');
        });
    });

    describe("printEveryNthElement", () => {
        it("correct summing", () => {
            let n = 2;
            let array = ["Oops", "Oooops", "Ooooooops", "Ooooooooops", "Ooooooooooooooooops", "Ooooooooooooooooooooooops"];
            expect(stringOperations.printEveryNthElement(n,array)).to.deep.equal(["Oops", "Ooooooops", "Ooooooooooooooooops"]);
        });
        it("correct summing", () => {
            let n = "yeet";
            let array = ["Oops", "Oooops", "Ooooooops", "Ooooooooops", "Ooooooooooooooooops", "Ooooooooooooooooooooooops"];
            expect(() => {
                stringOperations.printEveryNthElement(n,array);
            }).to.throw('The input is not valid!');
        });
        it("correct summing", () => {
            let n = 2;
            let array = "yeet"

            expect(() => {
                stringOperations.printEveryNthElement(n,array);
            }).to.throw('The input is not valid!');
        });
    });
});