(() => {
  const form = document.querySelector("form");
  const fruits = document.getElementById("fruits");

 form.addEventListener("submit", (event)=> {
  event.preventDefault();
  const p = document.querySelector("p");
  p.textContent = `당신이 선택한 과일은: ${fruits.value} 입니다.`;
  });


  const genderForm = document.getElementById("genderForm");
  const selectedGender = document.getElementById("gender");
  console.log(genderForm);

  genderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const result = document.getElementById("result");
    result.textContent = selectedGender.value;
  });


})();