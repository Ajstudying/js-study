(() => {
  const section = document.querySelector("section");
  const addButton = document.querySelector("button");
  const list = [];
  const divHidden = document.getElementById("hidden");

  addButton.addEventListener("click", () => {
    divHidden.style.display = "flex";
    const div = document.createElement("div");
    section.append(div);
    let name = document.getElementById("contactName");
    let phone = document.getElementById("contactPhone");
    let email = document.getElementById("contactEmail");
    
    list.push(name, phone, email);
    
    for(let i = 0; i <list.length; i++) {
      const p = document.createElement("p");
      div.append(p);
      p.textContent = list[i].value;
      p.classList.add("contacts");
    }
    list.length = 0;
    name.value = "";
    phone.value = "";
    email.value = "";
  });

  const removeDiv = document.getElementById("removeContact");
  const removeButton = removeDiv.querySelector("button");
  const contacts = document.getElementsByClassName("contacts");

  removeButton.addEventListener("click", () => {
    
    const removeName = document.getElementById("removeContactName");

    for(let i = 0; i < contacts.length; i++){
      if(contacts[i].textContent === removeName.value){
        contacts[i].parentNode.remove();
      }
    }
    removeName.value = "";
  });


})();