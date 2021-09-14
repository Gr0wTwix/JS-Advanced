function addItem() {
  let myId = document.getElementById("menu");
  let myOption = document.createElement("option");
  myOption.text = document.getElementById("newItemText").value;
  myOption.value = document.getElementById("newItemValue").value;
  myId.add(myOption);
  document.getElementById("newItemText").value = '';
  document.getElementById("newItemValue").value = '';
}