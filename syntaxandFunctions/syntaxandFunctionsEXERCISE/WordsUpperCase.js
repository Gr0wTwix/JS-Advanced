function wordsToUp(sentence) {
    let myArr = sentence.match(/\w+/g);
    let myOtherArray = [];

    for (let each of myArr) {
        myOtherArray.push(each.toUpperCase());
    }

    if (myOtherArray.length > 1) {
        console.log(myOtherArray.join(', '));
    } else {
        console.log(myOtherArray[0]);
    }
}
wordsToUp('Hi, how are you?');