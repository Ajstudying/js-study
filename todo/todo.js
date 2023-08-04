const container = document.querySelector("#todo-container");

//1번째 use-case
//입력창에 메모를 입력하고 추가버튼을 클릭하면 목록의 첫번째에 추가 되게 함
//+ 테스트 후 추가 된 것. 입력창에 값이 초기화
//+ 입력창에 엔터를 눌러도 추가

//2번째 use-case
//목록에서 항목을 클릭하면 클릭한 항목이 삭제(화면에서 안 보임)


//1번째 use-case를 pseudo code로 변환
//버튼을 클릭하면 입력창의 값을 가져온 후 
//항목을 만들고 목록에 추가

//화살표 함수
// const addItem = () => {
//   const input = container.querySelector("input");
//   //입력값을 가져옴
//   const value = input.value;
  
//   //아이템(li)를 생성하고, 입력값을 컨텐트로 넣음
//   const item = document.createElement("li");
//   item.textContent = value;
//   console.log(item);

//   //2번째 use-case 구현
//   //항목을 클릭하면 삭제하는 이벤트 핸들러 추가
//   item.addEventListener("click", () => {
//     item.remove();
//   })

//   //아이템을 목록에 추가
//   container.querySelector("ul").prepend(item);
//   //+입력값 초기화
//   input.value = "";

  
// };

//버튼을 클릭하면 작동할 함수를 등록
container.querySelector("button").addEventListener("click", addItem);

//입력창에서 키를 눌렀다가 뗐을 때 작동할 함수를 등록
container.querySelector("input").addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    addItem();
  }
});

function addItem() {
  const input = container.querySelector("input");
  //입력값을 가져옴
  const value = input.value;
  
  //아이템(li)를 생성하고, 입력값을 컨텐트로 넣음
  const item = document.createElement("li");
  item.textContent = value;
  console.log(item);

  //2번째 use-case 구현
  //항목을 클릭하면 삭제하는 이벤트 핸들러 추가
  item.addEventListener("click", () => {
    item.remove();
  })
  const div = document.querySelector("main > div:last-child");
  console.log(div);
  
  //아이템을 목록에 추가
  div.querySelector("ul").prepend(item);
  //+입력값 초기화
  input.value = "";
}