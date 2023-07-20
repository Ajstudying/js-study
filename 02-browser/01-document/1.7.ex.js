const rows = document.querySelectorAll("tbody > tr");

//sort를 배열로 변환.

//a.firstchild 해도 된다고 함.
const sortedRows = Array.from(rows).sort(
  (a, b) => 
  a.children[0].textContent.localeCompare(b.children[0].textContent)
);

// document.querySelector("tbody").innerHTML = "";

for(let row of sortedRows) {
  document.querySelector("tbody").append(row);
}


// let sortedRows = Array.from(table.tBodies[0].rows) // 1
//   .sort((rowA, rowB) => rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML));

// table.tBodies[0].append(...sortedRows); // (3)


//<문서수정하기 연습문제> 객체로 부터 트리 생성하기

let container = document.getElementById('container');
// container 요소 내에 트리를 생성합니다.

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

createTree(container, data); 

//알고리즘
//createTree: 객체를 받아서 속성목록으로 li를 만듬
//(ul에 li들을 붙이고 ul을 container에 붙여야함.)


//constainer: 트리(ul > li, li.....)를 만들어 붙여넣을 요소
//data: 객체 속성 목록으로 ul, li, li... 를 만들 값
function createTree(container, data){
  //재귀호출(recursive call): 본인함수 다시 호출
  //재귀호출로 문제를 해결할 때 가장 중요한 포인트
  //탈출 구문 (보통 탈출구문을 먼저 적음.)
  
  //아래의 if 조건문이 생각이 안나면 이런 방식도 쓸 수 있음.
  // let count = 0;
  // for(let prop in data){
  //   count++;
  // }
  // if(count > 0) {

  // }

  //객체에 속성이 있으면 처리함, 없으면 X(더이상 재귀호출 안함.)
  if(Object.keys(data).length > 0){
    // ul을 만들고
    const ul = document.createElement("ul");

    //속성 개수만큼 li들을 만듦
    //ul에 붙이고
    for(let prop in data){
      const li = document.createElement("li"); //li 만듦
      li.textContent = prop; //li 컨텐트로 속성명을 넣어줘야 함.
      ul.append(li);
      // 속성 객체에 대한 createTree 다시 호출
      //컨테이너를 뭘로 할 것이냐가 문제임. 하위 트리는 컨테이너가 li임!

      //**어떤 시점에 재귀 호출을 할 것인가
      //** 재귀호출은 가장 나중에 호출된 함수부터 처리된다.
      createTree(li, data[prop]);
    }

    //ul을 container에 붙임
    container.append(ul);
  }
}


//연습 어게인
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