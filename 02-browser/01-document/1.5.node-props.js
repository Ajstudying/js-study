  /* ------- tagName 관련 */

// const div = document.querySelector('div');
// // const div = document.querySelector('div p'); 디브 밑에 피태그 전부

// //태그명이 대문자로 나옴
// console.log(div.tagName);

// for(let elem of div.children){
//   console.log(elem.tagName);
//   if(elem.tagName === "P"){
//     elem.style.backgroundColor = "red";
//   }
// }

const container = document.querySelector("#counter-container");

const span = container.querySelector("span");

let count = 1;
const id = setInterval(() => {
  /* ----------------innerHTML관련 */


  // span.innerHTML = count;
  // span.textContent = count;
  //요소의 내부 HTML을 변경

  //추가이지만 실제로는 innerHTML 전체를 변경

  // span.innerHTML = `<strong>${count}</strong>`; //해당 숫자가 변경됨.
  //요소의 내부 HTML을 뒤에 추가
  span.innerHTML += `<strong>${count}</strong>`; //0,1,2,3.... 순서대로 차례로 붙어서 옆으로 출력됨.

  //요소의 내부 HTML을 앞에 추가 //span태그 안에 내용 전체를 다 갈아끼는 것.
  span.innerHTML = `<strong>${count}</strong>` + span.innerHTML;
  
  //요소.insertAdjacentHTML
  //요소의 인접한 위치에 html을 추가해라
  // (위치, 추가할 HTML)
  // 위치: 
  //     afterbegin - 시작태그 바로 뒤 (다음) (첫번째 자식)
  //     beforeend - 끝 태그 바로 앞 (전) (마지막 자식)
  //아래 방법은 내용 전체가 아니고 끝자리 두개정도만 바뀜 원래는 끝에만 바뀌긴 함.
  span.insertAdjacentHTML("afterbegin", `<strong>${count}</strong>`);
  count++;


  count > 10 && clearInterval(id);
}, 1000);


  /* ------- outerHTML과 관련 */
  //outerHTML 본인 태그 포함해서 변경이 일어남
  // console.log(span.outerHTML);
  // span.outerHTML = `<strong>${count}</strong>`;
  // console.log(span.outerHTML);


  //textContent 관련
  //태그 제외하고 text 노드의 data값만 가져올 수 있다.
  console.log(container.innerHTML);
  console.log(container.textContent); //안에 있는 글자만 뽑을 수 있음.

  /* ------- hidden 관련 */
  //css의 display: none;
  
  //css
  // .container { display: flex; .... }
  // .container.none { display: none}
  
  //js
  //container.style.display = 'none'; 
  //container.style.display ='flex';

  //위의 두개같이 선언이 안됨. 

  //container.classList.add('none');
  //container.classList.remove('none');

  //js로 하려면 위의 두줄을 해야 하니 hidden이 편리함.
  //display: none; -> display: flex(block, inline)
  span.hidden = false;

    /* ------- 그 외 속성 관련 */

    console.log(container.id);

    //id나 class로 선택을 하면 어떤 태그인지 잘 모름.

    // document.querySelector("#txt"); //안됨.

    //태그마다 알맞은 속성에 대한 자동완성이 안됨.
    //일반적은 모든 HTML Element에 대한 속성만 자동완성
    console.log(document.querySelector("input").value);
