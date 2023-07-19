const btn = document.querySelector("button");
const hidden = document.getElementById("hidden")



function sayThanks() {
  alert('감사합니다!');

  //이벤트 리스너 제거
  //("이벤트명", 함수명)
  btn.removeEventListener("click", sayThanks); //선언식으로 함수가 선언되었을 때 제거가능.
  hidden.remove();
}

//아래처럼 화살표 함수로 만들었을 때는 지울 수 없다.
// elem.addEventListener( "click" , () => alert('감사합니다!'));
// ....
// elem.removeEventListener( "click", () => alert('감사합니다!'));

//함수의 이름은 함수 본체의 대리자(delegate)
btn.addEventListener("click", sayThanks);

// 올바른 방법
// button.onclick = sayThanks;

// 틀린 방법
// button.onclick = sayThanks();

//이벤트 수신기(함수) 추가
// btn.addEventListener("click",() => {
//   console.log(this); //window 글로벌
  // console.log(event.target); 해당 화살표 함수에 매개변수 event를 넣고 하면 btn이 나옴!
//   alert("클릭❤");
// })

btn.addEventListener("click",(event) => {
  console.log(event); //event 타입 포인터이벤트라고 나옴!
  //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
  alert("클릭❤");
})

btn.addEventListener("click",() => {
  alert("야호❤");
})

btn.addEventListener("click", function () {
  console.log(this); //btn 변수
  alert("클릭-선언식");
})
//함수로 이렇게 설정하면 연속적으로 나오고, 변수로 대입하면
//btn = alert("클릭") 뭐 이런식으로 하면 덮어씌워져서 1번만 발생함.

//text숨기기
const text = document.querySelector("div > button:last-child");
text.addEventListener("click", () => {
  text.remove();
})
//답안은 input에 버튼박스를 만들고, 속성 부여하고, 그 아래의 div 박스를 숨김. 
// document.getElementById('hider').onclick = function() {
//   document.getElementById('text').hidden = true;
// }


