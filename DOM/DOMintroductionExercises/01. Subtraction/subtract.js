function subtract() {
    let myFirstNumber = document.getElementById('firstNumber').value;
    let mySecondNumber = document.getElementById('secondNumber').value;
    let myResult = Number(myFirstNumber) - Number(mySecondNumber);
    let myDiv = document.getElementById('result');
    myDiv.textContent = myResult;
}