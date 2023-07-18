const rows = document.querySelectorAll("tbody > tr");

//sort를 배열로 변환.

//a.firstchild 해도 된다고 함.
const sortedRows = Array.from(rows).sort(
  (a, b) => 
  a.children[0].textContent.localeCompare(b.children[0].textContent)
);

// document.querySelector("tbody").innerHTML = "";

for(let row of sortedRows) {
  document.querySelector("tbody").append(row);
}


// let sortedRows = Array.from(table.tBodies[0].rows) // 1
//   .sort((rowA, rowB) => rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML));

// table.tBodies[0].append(...sortedRows); // (3)