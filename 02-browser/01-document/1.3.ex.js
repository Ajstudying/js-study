const tbody = document.querySelector("tbody");

// for(let i =0; i<tbody.children.length; i++){

// }
const tr = tbody.querySelectorAll("tr");
// const td = tr[0].querySelectorAll("td");

for(let i = 0; i < tr.length; i++) {
  tr[i].children[i].style.backgroundColor = "red";
}

console.log(tr.item(0));
// console.log(tbody[0]);
// console.log(tr[0]);
// let a = Array.from(td);
// console.log(a);

for(let i = 0; i < tr.length; i++){
  for(let j = 0; j <= i; j++ ){
    if(i === j){
      // tbody.rows[i].cells[j].style.backgroundColor = "red"; 
      // tr[i].cells[j].style.backgroundColor = "red";
      
      const td = tr[i].querySelectorAll("td");
      td[j].style.backgroundColor = "red";
    }
  }
  // console.log(tr[i]);
  // console.log(td[i]);
}


// for(let tr of tbody.children) {
//   let i = Array.from(tbody.children).indexOf(tr);
//   const td = tr.children[i].style.backgroundColor = "red";
//   // tr.children[i].className = "bg-red";
// }


// let table = document.body.firstElementChild;

// for (let i = 0; i < table.rows.length; i++) {
//   let row = table.rows[i];
//   row.cells[i].style.backgroundColor = 'red';
// }