function consCrew(myObject) {
    if (myObject.dizziness) {
        myObject.levelOfHydrated += myObject.weight*myObject.experience*0.1;
        myObject.dizziness = false;
        return myObject;
    } else {
        return myObject;
    }
}
consCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  );