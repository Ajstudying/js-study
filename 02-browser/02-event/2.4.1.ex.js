// let data = {
//   "Fish": {
//     "trout": {},
//     "salmon": {}
//   },

//   "Tree": {
//     "Huge": {
//       "sequoia": {},
//       "oak": {}
//     },
//     "Flowering": {
//       "apple tree": {},
//       "magnolia": {}
//     }
//   }
// };

// const container = document.createElement("div");
// container.classList.add("container");

// console.log(Object.keys(data).length);

// // for(let prop in data){
// //   const li = document.createElement("li");
// //   li.textContent = data[prop];
// //   // ul.append(li);
// //   console.log(prop);
// // }

// //객체로부터 트리 생성하기
// function createTree(container, data) {
//   if(Object.keys(data).length > 0){
//     //ul만들기
//     const ul = document.createElement("ul");
    
//     //ul에 하나씩 넣을 li
//     for(let prop in data){
//       const li = document.createElement("li");
//       li.textContent = prop;
//       ul.append(li);
//       createTree(ul, data[prop]);
//     }

//     //div에 ul 추가
//     container.append(ul);
//   }
//   document.body.prepend(container)
// }

// createTree(container, data);

const tree = document.querySelector("#tree");

const spans = document.querySelectorAll("span");
console.log(spans);

tree.addEventListener("click", (event) => {
  if (event.target.tagName !== "SPAN") return;

  const ulElements = event.target.querySelectorAll("ul");
  ulElements.forEach((ul) => {
    ul.setAttribute("hidden", true);
    console.log(ul);
  });
});
// uls.setAttribute("hidden", false);
// tree.addEventListener("click", (event) => {
//   console.log(event.target);
//   if(event.target.className !== "tree") return;

//   let ul = event.target.closest("tree");
//   console.log(ul);
//   ul.hidden = !ul.hidden;
// })