//클래스 전체를 문자열로 조회
console.log(document.body.className);
//클래스 목록을 조회
console.log(document.body.classList);

//클래스 추가
document.body.classList.add("article");
console.log(document.body.className);
//클래스 존재여부(true/false)
console.log(document.body.classList.contains("article"));
//클래스 제거
document.body.classList.remove("article");
console.log(document.body.className);

//클래스 토글
if(document.body.classList.contains("article")) {
  document.body.classList.remove("article");
}else{
  document.body.classList.add("article");
}
console.log(document.body.className);

document.body.classList.toggle("article");
console.log(document.body.className);

/* background-color  => elem.style.backgroundColor
z-index           => elem.style.zIndex
border-left-width => elem.style.borderLeftWidth */

document.body.style.display = "none";

//setTimeout 코드가 멈춘게 아니고
//특정 시간 후에 함수가 실행
// setTimeou(() => (document.body.style.display = ""), 1000);
//그래서 아래 문장이 먼저 덮어씌워져서 깜빡이지 않음...? 

document.body.setAttribute("style", "color:red; bacgound-color: yellow");

//f12 눌러서 나오는 거에서styles(:how를 누르면 active, hover, focus등을 볼 수 있다.), 
//computed(실제로 적용된 스타일값)


// let startTime = new Date().getTime(); // 현재 시간(ms) 기록
// let interval = setInterval(myFunction, 1000); // 1초마다 myFunction 실행



showNotification({
  top: 10,
  right: 10,
  html: "Hello!",
  className: "welcome",
});


function showNotification (options) {
  let div = document.createElement("div");
  div.className = options.className;
  // div.classList.add(options.className);
  div.style.position = "fixed";
  //div.style.position = "absolute";
  div.style.top = `${options.top}px`;
  div.style.right = `${options.right}px`;
  div.style.backgroundColor="beige";
  div.style.color="black";
  
  let count = 1;
  setInterval(() => {
    div.textContent = options.html + " " +count++;
    // div.innerHTML = options.html + " " + count++;
    document.body.style.display = "none";
    setTimeout(() => {
      document.body.style.display = ""
    }, 1500);
  },1000);

  // let intervalId = setInterval(() => {
  //   div.textContent = options.html + count++;
  //   setTimeout(() => {
  //     div.textContent = ""; //아예 빈문자열을 줘서 없애기.
  //     clearInterval(intervalId); // setInterval 중지
  //   }, 1500);
  // }, 1000);




  document.body.prepend(div);




  // function showNotification({top = 0, right = 0, className, html}) {

  //   let notification = document.createElement('div');
  //   notification.className = "notification";
  //   if (className) {
  //     notification.classList.add(className);
  //   }

  //   notification.style.top = top + 'px';
  //   notification.style.right = right + 'px';

  //   notification.innerHTML = html;
  //   document.body.append(notification);

  //   setTimeout(() => notification.remove(), 1500);
  // }

  // // test it
  // let i = 1;
  // setInterval(() => {
  //   showNotification({
  //     top: 10,
  //     right: 10,
  //     html: 'Hello ' + i++,
  //     className: "welcome"
  //   });
  // }, 2000);
}
