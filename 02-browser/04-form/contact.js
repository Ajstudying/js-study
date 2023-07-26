(async() => { 
  const response = await fetch("http://localhost:8080/contacts");
  const result = await response.json();
  console.log(result);


  const tbody = document.querySelector("tbody");
  for(let item of result){
    const template = /*html*/
    `
    <tr>
    <td>${item.name}</td>
    <td>${item.phone}</td>
    <td>${item.email}</td>
    </tr>
    `
    tbody.insertAdjacentHTML("afterbegin", template);
  }
})();


(() => {

  const table = document.querySelector("table");
  const tbody = document.createElement("tbody");
  table.append(tbody);
  const form = document.querySelector("form");
  let constacts = form.querySelectorAll("input");
  const button = form.querySelector("button");
  const thead = document.querySelector("thead");
  // 클릭 여부를 저장하는 변수
  let isHeadVisible = false;
 
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const tr = document.createElement("tr");
    tbody.append(tr);
    for(let i = 0; i < constacts.length; i++){
      if(constacts[i].value !== ""){
        const td = document.createElement("td");
        td.textContent = constacts[i].value;
        tr.append(td);
      }
    }
    
    if(!isHeadVisible){
      thead.hidden = false;
      isHeadVisible = true;
    }
    form.reset();
  });

  const removeDiv = document.querySelector("div");
  const deleteButton = removeDiv.querySelector("input:last-child");

  deleteButton.addEventListener("click", () => {
      const tdName = table.querySelectorAll("tbody > tr > td:first-child");
      const removeName = removeDiv.querySelector("input");
      for(let i = 0; i <tdName.length; i++){
          if(tdName[i].textContent === removeName.value){
              let tr = tdName[i].parentNode;
              tr.remove();
          }
      }
      removeName.value = "";
  });
  

})();