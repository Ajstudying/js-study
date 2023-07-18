//1. 요소 생성(createElement)
//2. 요소의 속성 설정(properties)
//3. 부모 요소에 append/prepend

//엘리먼트 생성
//변수에 대입만 해놓음(메모리에만 있음.)
const alertBox = document.createElement('div'); //괄호 안에 원하는 태그 종류
alertBox.className = "alert";
//여기까진 화면에 전혀 만들어지지 않음.

//노드를 하나씩 생성중 
const hiText = document.createElement("strong");
hiText.textContent = "안녕하세요!"

let count = 3;
const message = document.createTextNode(
  `중요 메세지 ${3}건을 확인하셨습니다.`
);
//뒤쪽에: 가장 마지막 자식으로 추가함.
alertBox.append(hiText);
alertBox.append(message);
//얼럿박스에만 append됨


setTimeout(() => {
  document.body.append(alertBox); 
  // append를 하면 뒤쪽으로 붙어서, 스크립트 뒤로 오기 때문에 안 쓰는게 낫다.
  // 앞쪽에: 가장 첫번째 자식으로 추가함.
  document.body.prepend(alertBox);
}, 1000);

// setTimeout(() => {
//   document.body.remove(alertBox);
// }, 3000);

//(1.5에 예시 코드 있음!!)
// 이 아래의 것도 할 줄 알아야 함!
// elem.insertAdjacentHTML(where, html);

// document.body.insertAdjacentHTML("afterbegin", `<div class="alert">
// <strong>안녕하세요!</strong> 중요 메시지를 확인하셨습니다.
// </div>`);

// setTimeout(() => {
//   const alertBox = 
//   document.querySelector(".alert");
//   document.body.remove(alertBox);
// }, 3000);

//페이지 로드가 되고 나서 호출하면 기존에 있던 문서 내용이 사라짐. 안 쓰는게 좋음.
// document.write("<b>자바스크립트</b>");

// const elem = document.getElementById("elem");

// setTimeout(() => {
//   document.body.remove(elem);
// },  3000);

// function clear(elem) {
//   while (elem.firstChild) {
//     elem.firstChild.remove();
//   }
// }

// function clear(elem) {
//   elem.innerHTML = '';
// }

// clear(elem);

// const ul = document.createElement("ul");

// while(true) {
//   let liElement = prompt("리스트 내용을 입력하세요", "");
  
//   if(liElement == null){
//     break;
//   }else {
//     const li = document.createElement("li");
//     li.className = "list";
//     li.textContent = liElement;
//     ul.append(li);
//     document.body.prepend(ul);
//   }
// }

// let ul = document.createElement('ul');
//     document.body.append(ul);

//     while (true) {
//       let data = prompt("Enter the text for the list item", "");

//       if (!data) {
//         break;
//       }

//       let li = document.createElement('li');
//       li.textContent = data;
//       ul.append(li);
//     }

let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};

console.log(data["Fish"]);

let div = document.createElement("div");

// for(let prop in data){
//   const m = document.createTextNode(prop);
//   let ul = document.createElement("ul");
//   let li = document.createElement("li");
//   let li1 = document.createElement("li");
//   let li2 = document.createElement("li");
//   li.append(m);
//   ul.append(li);
//   if(prop.length > 1){
//     for(let i in data[prop]){
//       const liM = document.createTextNode(i);
//       li1 = document.createElement("li");
//       li1.append(liM);
//       li.append(li1);
//       if(data[prop].length > 1){
//         for(let j in data[prop][i]){
//           li2 = document.createElement("li");
//           const liDeepM = document.createTextNode(prop[i]);
//           li2.append(liDeepM);
//           li1.append(li2);
//         }
//       }
//     }li.append(li1);
    
//   }
  
//   div.append(ul);
//   document.body.prepend(div);
  
// }
