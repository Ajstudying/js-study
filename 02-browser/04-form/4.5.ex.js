(() => {
  const contact = document.getElementById("contact");
  const addButton = document.querySelector("button");


  addButton.addEventListener("click", ()=> {
    const ul = document.createElement("ul");
    contact.append(ul);

    const manager = document.getElementById("manager");
    console.log(manager);
    const lists = manager.querySelectorAll("input");
    console.log(lists);
    for(let i= 0; i < lists.length; i++){
      const li = document.createElement("li");
      ul.append(li);
      li.textContent = lists[i].value;
    }
    displayClear();
  });

  function displayClear() {
    let name = document.getElementById("contactName");
    let phone = document.getElementById("contactPhone");
    let email = document.getElementById("contactEmail");
    name.value = "";
    phone.value = "";
    email.value = "";
    removeName.value = "";
  }
  
  const removeList = document.getElementById("removeList");
  const removeButton = removeList.querySelector("button");
  const removeName = document.getElementById("removeContactName");

  removeButton.addEventListener("click", () => {
    let reList = contact.querySelectorAll("li");
    for(let i = 0; i < reList.length; i++) {
      if(reList[i].textContent === removeName.value){
        reList[i].parentNode.remove();
      }
    }
    displayClear();
  });




})();