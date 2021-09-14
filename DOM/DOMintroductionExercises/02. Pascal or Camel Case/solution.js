function solve() {
  let myFirstWord = document.getElementById("text").value;
  let mySecondWord = document.getElementById("naming-convention").value;
  let myArray = myFirstWord.toLowerCase().split(" ");
  let myResult = '';

  if (mySecondWord === "Camel Case") {
    for (let i = 0; i < myArray.length; i++) {
      if (i === 0) {
        myResult += myArray[i];
      } else {
        myResult += myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1);
      }
    }
  } else if (mySecondWord === "Pascal Case") {
    for (let i = 0; i < myArray.length; i++) {
      myResult += myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1);
    }
  } else {
    myResult = "Error!";
  }

  document.getElementById('result').textContent = myResult;
}