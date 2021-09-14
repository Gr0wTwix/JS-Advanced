let rgbToHexColor = require('./myColourCode.js');
const { expect } = require('chai');

describe('RGBtoHex', () => {
    it('converts black to hex', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('converts white to hex', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('converts red to hex', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FFFFFF');
    });

    it('converts green to hex', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#FFFFFF');
    });

    it('converts blue to hex', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#FFFFFF');
    });

    it('returns undefined for string params', () => {
        expect(rgbToHexColor(`a`, `a`, `a   `)).to.be.undefined;
    });

    it('converts [151, 104, 172] to hex', () => {
        expect(rgbToHexColor(151, 104, 172)).to.equal('#9768AC');
    });

    it('returns undefined for minus arguments', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });

    it('returns undefined for greater than 255', () => {
        expect(rgbToHexColor(263, 0, 255)).to.be.undefined;
    })
});

