const {expect} = require('chai');
const { isSymetric } = require('./myCode');

describe('Is this symetric', () => {
    it('This is symetric', () => {
        expect(isSymetric([1,1])).to.be.true;
    });

    it('returns false for invalid type', () => {
        expect(isSymetric([1,2])).to.be.false;
    });

    it('returns false for invalid arguments', () => {
        expect(isSymetric('a')).to.be.false;
    });

    it('returns false for type-coerced elements', () => {
        expect(isSymetric(['1',1])).to.be.false;
    });

    it('returns true for valid symetric arguments', () => {
        expect(isSymetric([1,1,1])).to.be.true;
    });

    it('returns false for too many invalid arguments', () => {
        expect(isSymetric(['a','a'])).to.be.false;
    });
});