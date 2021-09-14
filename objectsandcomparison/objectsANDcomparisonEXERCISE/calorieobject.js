function calorieObject(array) {
    let myObj = {};
    for (let i = 0; i < array.length; i++) {
        myObj[array[i]] = Number(array[i+1]);
        i++;
    }
    return myObj;
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);