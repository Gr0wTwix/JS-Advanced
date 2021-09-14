function solve() {
    class Balloon {
        constructor(color, length) {
            this.color = color;
            this.gasWeight = Number(length);
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, length, string2, number2) {
            super(color, length);
            this._ribbon = {
                color: string2,
                length: Number(number2)
            }
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, length, string2, number2, text) {
            super(color, length, string2, number2);
            this._text = text;
        }

        get text () {
            return this._text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon,
    }
}