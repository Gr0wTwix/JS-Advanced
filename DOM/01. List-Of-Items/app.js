function addItem() {
    // select input field
    let text = document.getElementById('newItemText').value;
    // read input value
    // create new <li> element 
    const liElement = document.createElement('li');
    // set text of new element to input value
    liElement.textContent = text;
    // select list from page
    const ulElement = document.getElementById('items');
    // append new element to list
    ulElement.appendChild(liElement); 
}