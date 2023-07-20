const title = document.querySelector("h2");
const list = document.querySelector("ul");
const arrow = document.querySelector("i");

// title.addEventListener("click", ()=> {
//   list.hidden = !list.hidden;
//   arrow.style.transform = !list.hidden 
//   ? "rotate(90deg)" : "rotate(0deg)";
// });

title.addEventListener("click", () =>{
  list.hidden = !list.hidden;
  arrow.textContent = list.hidden ?
  "▶" : "▼";
})

// const panes = document.getElementsByClassName("pane");
const buttons = document.getElementsByClassName("remove-button");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", (event) => {
//     const button = event.target; // 클릭한 버튼 요소
//     const pane = button.closest(".pane"); // 버튼과 연결된 가장 가까운 .pane 요소를 찾음
//     if (pane) {
//       pane.remove();
//     }
//   });
// }

// 클린 코드 버전~!!!! 좋은듯!!!! 이건 자바스크립트로 버튼 추가 안한 버전임!
//pane 위의 div를 id container로 잡음.
const container = document.querySelector("#container");
// container.onclick = function(event) {
//   if (event.target.className != 'remove-button') return;

//   let pane = event.target.closest('.pane');
//   pane.remove();
// };

container.addEventListener("click", (event) => {
  if (event.target.className != 'remove-button') return;

  let pane = event.target.closest('.pane');
  pane.remove();
});


// for(let i = 0; i < panes.length; i++){
//   const pane = panes[i];
//   let button = pane.querySelector("button");
//   button.addEventListener("click", () => {
//     pane.remove();
//   })
// }


// 답안
// let panes = document.querySelectorAll('.pane');

//     for(let pane of panes) {
//       pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
//       // css로 안넣고 자바스크립트로 넣음.
//       pane.firstChild.onclick = () => pane.remove();
//       //pane.firstChild는 위에 자바스크립트로 넣은 버튼 요소를 가리킴.
//       //왜냐하면 afterbegin으로 pane의 자식요소 첫번째가 되기 때문!!
//     }

// const container = document.querySelector("#container");
// const deletePane = (event) => {
//   if (event.target.tagName.toLowerCase() === "button") {
//     const pane = event.target.closest(".pane");
//     pane.remove();
//   }
// };
// container.addEventListener("click", deletePane);
