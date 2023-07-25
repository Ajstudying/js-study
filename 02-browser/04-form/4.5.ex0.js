(() => {
  const ul = document.querySelector("ul");
  const addButton = document.querySelector("button");
  const name = document.getElementById("contactName");
  const phone = document.getElementById("contactPhone");
  const email = document.getElementById("contactEmail");

  addButton.addEventListener("click", () => {
    const li = document.createElement("li");
    ul.append(li);
    li.textContent = `이름: ${name.value}, 전화번호: ${phone.value}, 이메일: ${email.value}`;
    displayClean();
  });

  function displayClean() {
    name.value = "";
    phone.value = "";
    email.value = "";
    removeName.value = "";
  }

  const removeList = document.getElementById("removeList");
  const removeButton = removeList.querySelector("button");
  const removeName = document.getElementById("removeContactName");

  removeButton.addEventListener("click", () => {
    const lists = ul.querySelectorAll("li");
    for(let i = 0; i < lists.length; i++){
      let list = lists[i].textContent.split(",")[0];
      let name = list.slice(list.indexOf(" ") + 1);
      if(name === removeName.value){
        lists[i].remove();
      }
    }
    displayClean();
  });


})();