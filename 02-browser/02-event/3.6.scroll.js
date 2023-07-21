//즉시 실행 함수 표현식
//IIFE (Immediately Invoked Function Expression)

//(function() {})()
//(()=>{})() 위아래 두개가 같음

//1. 이름 없이 함수를 생성 후 바로 실행하고자 할 때
//function func() {....} 선언식
//func() //실행
//->
//(function () {...})() //함수 실행

//2. 변수나 함수명의 볌위를 제한하고자 할 때

(() => {
  console.log("run");
  let count = 3;
  window.addEventListener("scroll", (e) => {
    //문서 전체의 높이
  console.log(document.body.clientHeight);
  // console.log(scrollY);
  console.log(document.body.clientHeight / 3);
  
    //window.scrollY: 스크롤된 Y축 크기
    //window.innerHeight: 브라우저의 스크롤바를 제외한 뷰포트 높이()
  
    // window.scrollY + document.body.clientHeight;
  
    document.querySelector("div").innerHTML = document.body.clientHeight - (window.scrollY + window.innerHeight);
    const offset = document.body.clientHeight - (window.scrollY + window.innerHeight);
  
    if (offset < 50){
      console.log("끝점에 가깝다.")
      //요소 생성
      const div = document.createElement("div");
      //속성 설정
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      div.className = "box";
      div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      div.innerHTML = ++count;
      // div.innerHTML = new Date().toLocaleDateString();
      //어떤 요소에 append
      document.body.append(div);
    }
  });
})();


//lazy 속성  laze loading