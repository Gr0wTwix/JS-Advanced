class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
        this._setRooms();
    }

    _avaibleRoomTypes(roomType) {
        return ["single", "double", "maisonette"].indexOf(roomType);
    }

    _setRooms() {
        this._avaibleRooms = {
            single: Math.floor(this.capacity * 0.5),
            double: Math.floor(this.capacity * 0.3),
            maisonette: Math.floor(this.capacity * 0.2)
        };
    }

    get roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135
        }
    }

    rentARoom(clientName, roomType, nights) {
        if (this._avaibleRooms.hasOwnProperty(roomType) && this._avaibleRooms[roomType] > 0) {
            let roomNumber = this.currentBookingNumber;
            let booking = {
                clientName,
                roomType,
                nights,
                roomNumber
            };
            this.bookings.push(booking);
            this.currentBookingNumber++;
            this._avaibleRooms[roomType] -= 1;
            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${roomNumber}.`;
        } else {
            let output = `No ${roomType} rooms available!`;
            Object.keys(this._avaibleRooms).forEach(key => {
                if (this._avaibleRooms[key] > 0) {
                    output += ` Available ${key} rooms: ${this._avaibleRooms[key]}.`;
                }
            });
            return output.trim();
        }
    }

    checkOut(currentBookingNumber) {
        let currentBooking = this.bookings.find(b => b.roomNumber === currentBookingNumber);
        if (!currentBooking) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }
        let roomAmount = this.roomsPricing[currentBooking.roomType] * currentBooking.nights;
        let output = `We hope you enjoyed your time here, Mr./Mrs.` + ` ${currentBooking.clientName}. The total amount of money you have to pay is ${roomAmount} BGN.`;
        return output;
    }

    report() {
        let output = `${this.name.toUpperCase()} DATABASE:\n` +
            "--------------------"+
            "\n";
        if (this.bookings.length) {
            let outpuArr = [];
            for (const booking of this.bookings) {
                let myOutput = "";
                myOutput += `bookingNumber - ${booking.roomNumber}\n`;
                myOutput += `clientName - ${booking.clientName}\n`;
                myOutput += `roomType - ${booking.roomType}\n`;
                myOutput += `nights - ${booking.nights}\n`;
                outpuArr.push(myOutput);
            }
            output += outpuArr.join(`${"----------"}\n`);
        } else {
            output += `There are currently no bookings.\n`;
        }
        return output.trim();
    }
}