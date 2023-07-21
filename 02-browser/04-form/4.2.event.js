(() => {
  const input = document.querySelector("input");

  //입력 요소를 클릭하여 프롬프트 활성 됐을 때
  input.addEventListener("focus", (e) => {
    console.log("--focus--");
    // console.log(e);
  }); //창에 프롬프트(입력창 깜박 거리는거)켜져있을 때

  //focus 상태에서 다른 요소나 다른 곳으로 
  //focus가 이동됐을 때
  input.addEventListener("blur", (e) => {
    console.log("--blur--");
    // console.log(e);
  }); //다른곳 선택시

  //입력하면 발생하는 이벤트
  input.addEventListener("input", (e) => {
    console.log("--input--");
    // console.log(e);
  });

  //blur가 될 때 value 속성 값이 바뀌면 발생
  input.addEventListener("change", (e) => {
    console.log("--change--");
    // console.log(e);
  });

  //클립보드에 있는 내용을 붙일 때
  input.addEventListener("paste", (e) => {
    console.log("--paste--");
    // console.log(e);
  });
})();