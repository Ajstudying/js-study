const div = document.querySelector("div");
const p = document.querySelector("P");


//꼭 실행시켜서 확인해 볼 것!!
div.addEventListener("click", (event) => {
  console.log("----- div clicked-----")
  //event.target : 실제로 이벤트를 발생시킨 요소
  //event.currentTarget : 이벤트 핸들러를 실행시킨 요소
  //div 눌렀을 때 실행하는 기능은 위 두가지가 같을 때만 하는 식으로 만들거나
  //p를 눌렀을 때 위로 event가 전파하지 않도록 하는 방법이 있다. (보통 이 방법을 씀!! e.stopPropagation();)
  console.log(event.target);
  console.log(event.currentTarget);
});

p.addEventListener("click", (e) => {
  //이벤트를 전파하지 않음
  e.stopPropagation();


  console.log("----- p clicked-----")
  console.log(e.target);
  console.log(e.currentTarget);
})