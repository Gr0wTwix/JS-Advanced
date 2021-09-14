function solve(currentSpeed, area) {
    let typeOfdriving = "";
    switch (area) {
        case "city":
            if (currentSpeed <= 50) {
                console.log(`Driving ${currentSpeed} km/h in a 50 zone`);
            } else {
                if (currentSpeed - 50 <= 20) {
                    typeOfdriving = "speeding";
                } else if (currentSpeed - 50 <= 40 && currentSpeed - 50 > 20) {
                    typeOfdriving = "excessive speeding";
                } else {
                    typeOfdriving = "reckless driving";
                }
                console.log(`The speed is ${currentSpeed - 50} km/h faster than the allowed speed of 50 - ${typeOfdriving}`);
            }
            break;
        case "residential":
            if (currentSpeed <= 20) {
                console.log(`Driving ${currentSpeed} km/h in a 20 zone`);
            } else {
                if (currentSpeed - 20 <= 20) {
                    typeOfdriving = "speeding";
                } else if (currentSpeed - 20 <= 40 && currentSpeed - 20 > 20) {
                    typeOfdriving = "excessive speeding";
                } else {
                    typeOfdriving = "reckless driving";
                }
                console.log(`The speed is ${currentSpeed - 20} km/h faster than the allowed speed of 20 - ${typeOfdriving}`);
            }
            break;
        case "interstate":
            if (currentSpeed <= 90) {
                console.log(`Driving ${currentSpeed} km/h in a 90 zone`);
            } else {
                if (currentSpeed - 90 <= 20) {
                    typeOfdriving = "speeding";
                } else if (currentSpeed - 90 <= 40 && currentSpeed - 90 > 20) {
                    typeOfdriving = "excessive speeding";
                } else {
                    typeOfdriving = "reckless driving";
                }
                console.log(`The speed is ${currentSpeed - 90} km/h faster than the allowed speed of 90 - ${typeOfdriving}`);
            }
            break;
        case "motorway":
            if (currentSpeed <= 130) {
                console.log(`Driving ${currentSpeed} km/h in a 130 zone`);
            } else {
                if (currentSpeed - 130 <= 20) {
                    typeOfdriving = "speeding";
                } else if (currentSpeed - 130 <= 40 && currentSpeed - 130 > 20) {
                    typeOfdriving = "excessive speeding";
                } else {
                    typeOfdriving = "reckless driving";
                }
                console.log(`The speed is ${currentSpeed - 130} km/h faster than the allowed speed of 130 - ${typeOfdriving}`);
            }
            break;
    }
}
solve(200, 'motorway');