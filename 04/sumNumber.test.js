const { expect } = require('chai');
const sum = require('./sumNumbers');

describe('Sum of Numbers', () => {
    it('Sum of Numbers', () => {
        expect(sum([1])).to.equal(1);
    });

    it('Sum of my Numbers', () => {
        expect(sum([1,1])).to.equal(2);
    });

    it('Sum different Numbers', () => {
        expect(sum([2,3,4])).to.equal(9);
    });
});