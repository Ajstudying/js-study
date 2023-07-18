//표준 html attribute는 js property 변환됨.
console.log(document.body.id);

console.log(document.body.somthing); //undefined

//비표준(사용자 정의, customized) html attribute
// getAttribute("속성명")
console.log(document.body.getAttribute("somthing"));

//사용자 정의 속성 추가(변경)
document.body.setAttribute("option", "special");
const arr = Array.from(document.body.attributes).map((attr) => `${attr.name}='${attr.value}'`);

console.log(arr);

//비표준 속성, data-속성
const items = document.querySelectorAll('li');

for(let item of items){
//js에서는 dataset.속성명 접근 가능함.
  console.log(item.dataset.sno);

  //데이터 속성 추가 및 변경
  //data-major="full-stack" 화면엔 보이지 않음
  setTimeout(() => {
    item.dataset.major = "full-stack";
  }, 1000);
}

const widgets = document.querySelector("[data-widget-name]");
console.log(widgets);
console.log(widgets.dataset.widgetName);
console.log(widgets.getAttribute('data-widget-name'));