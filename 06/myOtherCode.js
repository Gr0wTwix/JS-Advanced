function rgb(r,g,b) {
    if (typeof r != 'number' || typeof g != 'number' || typeof b != 'number') {
        return undefined;
    } else if (rgb.some(c => c < 0)) {
        return undefined;
    } else if (rgb.some(c => c > 255)) {
        return undefined;
    }

    return `#` + rgb.map(derToHex).join('').toUpperCase();

    function derToHex(n) {
        return ('00' + n.toString(16).slice(-2));
    }
}

module.export = rgb;