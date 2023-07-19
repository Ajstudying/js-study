//알림 생성
let count = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: `<strong>Hello!</strong><data>${count}</data>`,
    className: "welcome",
  });
  count++;
}, 1000);


//함수 선언
//options로 받으면 options.객체키 << 이런식으로 사용해야 함.
function showNotification ({top, right, html, className}) { //구조분해할당
  //const {top, right, html, className} = options 이렇게 구조분해 할당도 할 수 있다.

  //notification box를 생성
  const box = document.createElement("div");
  box.className = `notification ${className}`;

  //기본스타일 속성은 css
  //박스마다 다른 속성은 style로
  box.style.top = `${top}px`;
  box.style.right = `${right}px`;
  box.innerHTML = html;

  //일단 body 앞 쪽에 붙임
  document.body.prepend(box);

  //1.5후에 없어져
  setTimeout(() => {
    //node.remove();
    box.remove();
  }, 1500);
  
}