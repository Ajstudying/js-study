(() => {


  const productForm = document.querySelector("form");
  
  const checkedFruits = document.querySelector("button");
  const ul = productForm.querySelector("ul"); 

  productForm.addEventListener("submit", (e) => {
    // 기본 제출 동작을 막음.
    e.preventDefault();
  });

  /** 체크박스 실시간 확인*/
  productForm.addEventListener("click", (event) => {
    const targetCheckbox = event.target;
    //&& targetCheckbox.type === "checkbox"
    if (targetCheckbox.getAttribute("name") === "fruit") {
      const isChecked = targetCheckbox.closest("label");
      ul.className = "fruitsList";
      const li = document.createElement("li");
      ul.append(li);
  
      if (targetCheckbox.checked) {
        li.textContent = `선택한 상품은 ${isChecked.textContent}입니다.`;
      } else {
        // 체크가 해제된 경우 해당 항목 제거
        const lis = ul.getElementsByTagName("li");
        for (let i = 0; i < lis.length; i++) {
          if (lis[i].textContent === `선택한 상품은 ${isChecked.textContent}입니다.`) {
          lis[i].remove();
          break;
        }
      }
      }
    }
  });
  
  checkedFruits.addEventListener("click", ()=> {
    ul.hidden = !ul.hidden;
  });

  const radioForm = document.getElementById("radioForm");
  const radioUl = document.querySelector("#radioForm > ul")
  const checkedRadio = document.getElementsByTagName("button")[1];
  console.log(checkedRadio);
  
  radioForm.addEventListener("submit", (e) => {
    // 기본 제출 동작을 막음.
    e.preventDefault();
  });

  /** 체크박스 셀렉트 */
  const checkboxes = radioForm.querySelectorAll("input[name='language']");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
      if(e.target.type === "radio"){
        const isChecked = e.target.closest("label");
        const li = document.createElement("li");
        radioUl.append(li);
        if (e.target.checked) {
          li.textContent = `${isChecked.textContent}`;
        }
      }
    });
  });
  checkedRadio.addEventListener("click", () => {
    radioUl.hidden = !radioUl.hidden;
  });


})();