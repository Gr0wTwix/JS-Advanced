function solve(steps,meters,kmPerH) {
    let mPerH = kmPerH*1000;
    let mPerM = Math.round(mPerH/60);
    let mPerS = Math.round(mPerM/60);
    let myDistance = steps*meters;
    let minutesRest = myDistance/500;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    while (mPerH < myDistance) {
        hours++;
        myDistance -= mPerH;
    }

    while (mPerM < myDistance) {
        minutes++;
        myDistance -= mPerM;
    }

    minutes += minutesRest;

    while (mPerS < myDistance) {
        seconds++;
        myDistance -= mPerS;
    }

   console.log(hours, minutes, seconds);
}
solve(4000, 0.60, 5);