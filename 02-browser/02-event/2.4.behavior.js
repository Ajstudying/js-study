const input1 = document.querySelector("input:nth-of-type(1)");
const input2 = document.querySelector("input:nth-of-type(2)");

input2.addEventListener("mounsedown", (e) => {
  e.preventDefault();
})
input2.addEventListener("focus", (e) => {
  e.target.value ="";
})


//contextmenu 마우스 우클릭할 때 나오는 목록
document.body.addEventListener("contextmenu", 
(e) =>{
  e.preventDefault();  //기본 동작을 막는 것...?
  console.log(e);
  confirm("당신은 해커입니까?") && window.close(); //윈도우창 닫힘
});