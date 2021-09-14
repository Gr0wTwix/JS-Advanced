function deleteByEmail() {
    // read input field value
    const email = document.querySelector('input[name="email"]').value;
    console.log(email);
    // select all table cells from the last column
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    // iterate over cells
    let deleted = false;

    for (let row of rows) {
    // if text matches input value -> delete row
    if (row.children[1].textContent == email) {
        row.parentNode.removeChild(row);
        deleted = true;
        document.getElementById('result').textContent = "Deleted.";
    }
    // -- get cell parent
    // -- remove row from table
    }
    // display result message
    if (deleted != true) {
        document.getElementById('result').textContent = "Not found.";
    }
}