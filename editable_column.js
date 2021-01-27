var columnName = document.getElementById('1-name');
console.log(columnName.innerHTML);
columnName.onclick = () => {
    columnName.contentEditable=true;
}

var columnNumber = document.getElementById('1-number');
console.log(columnNumber.innerHTML);
columnNumber.onclick = () => {
    columnNumber.contentEditable=true;
}