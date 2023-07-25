(() => {

  const table = document.getElementById("contactList");
  const tbody = document.createElement("tbody");
  table.append(tbody);
  
  let constacts = document.getElementsByClassName("contact");
  const button = document.querySelector("button");
  const thead = document.querySelector("thead");
  // 클릭 여부를 저장하는 변수
  let isHeadVisible = false;
 
  button.addEventListener("click", () => {
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
    clearSetting();
  });


  function clearSetting() {
    for(let i = 0; i < constacts.length; i++){
        constacts[i].value = "";
    }
  }

  const removeDiv = document.getElementById("removeContact");
  const deleteButton = removeDiv.querySelector("input:last-child");

  deleteButton.addEventListener("click", () => {
      const tdName = table.querySelectorAll("tbody > tr > td:first-child");
      const removeName = document.getElementById("removeName");
      for(let i = 0; i <tdName.length; i++){
          if(tdName[i].textContent === removeName.value){
              let tr = tdName[i].parentNode;
              tr.remove();
          }
      }
      removeName.value = "";
  });
  

})();