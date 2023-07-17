const ageTable = document.getElementById("age-table");
console.log(ageTable);

const tableLabel = ageTable.querySelectorAll("label");
//document.querySelectorAll('#age-table label')
console.log(tableLabel);

const tableTd = ageTable.querySelector("td");
//table.getElementsByTagName('td')[0]
//table.rows[0].cells[0]
console.log(tableTd);

const formName = document.getElementsByName("search")[0];
//let form = document.getElementsByName('search')[0]
//document.querySelector('form[name="search"]')
console.log(formName);

const formFirstInput = formName.getElementsByTagName("input")[0];
//formName.querySelector("input");
console.log(formFirstInput);

const formLastInput = document.querySelector("form > input:last-child");
//let inputs = formName.querySelectorAll('input')
//inputs[inputs.length-1]
console.log(formLastInput);