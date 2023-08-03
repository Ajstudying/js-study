// post 목록 화면을 제작 post.html, post.js
// fetch api를 사용하여 http://localhost:8080/posts 주소를 호출한 후

// 배열 목록을 div(카드) 목록으로 표시한다.

//    -----------------              |
//    | 게시자                        |
//    | -------------                |
//    | 1제목(h3)                    |
//    | 본문(p)                      |
//    |  .....                       |
//    |  .....                       |
//    | -------------                |
//    | new Date(생성시간).toString() |
//    -----------------
//
//    -----------------
//    | 게시자         |
//    | ------------- |
//    | 2제목(h3)       |
//    | 본문(p)        |
//    |  .....        |
//    |  .....        |
//    | ------------- |
//    | 생성시간       |
//    -----------------

function cardTemplate(item) {
  const imageElement = item.image ? `<img src="${item.image}" alt="${item.no}">` : "";
  // if(item.image == null || item.image == ""){
    const template =  /*html*/
    `<article data-no="${item.no}">
    <div>
    <h4>작성자: ${item.creatorName}</h4>
    <button class="remove">X</button>
    </div>
    <hr>
    <h3>${item.title}</h3>
    <p>${item.content}</p>
    <div><button class="btn-modify">:</button></div>
    ${imageElement}
    <hr>
    <h5><sub>생성시간: ${new Date(item.createdTime).toLocaleString()}</sub></h5>
    <hr>
    </article>`;
    return template;
  // } else {
  //   const template =  /*html*/
  //   `<article data-no="${item.no}">
  //   <div>
  //   <h4>작성자: ${item.creatorName}</h4>
  //   <button class="remove">X</button>
  //   </div>
  //   <hr>
  //   <h3>${item.title}</h3>
  //   <p>${item.content}</p>
  //   <img src="${item.image}" alt="${item.no}">
  //   <hr>
  //   <h5><sub>생성시간: ${new Date(item.createdTime).toLocaleString()}</sub></h5>
  //   <hr>
  //   </article>`;
  //   return template;
  // }
}

// (async () => {
//   const url = "http://localhost:8080/posts";

//   // 1. fetch, 서버에서 데이터 가져오기
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);

//   // 배열 메서드를 사용하기 위해서...
//   const data = Array.from(result);
//   console.log(data);

//   // 2.-- 데이터배열 반복문으로 html문자열 만들고,
//   // 컨테이너에 추가
//   data
//     // 데이터를 다시 순정렬을 한다음에
//     .sort((a, b) => a.no - b.no)
//     // 반복문으로 form뒤에 div를 추가함
//     .forEach((item) => {
//       document.forms[0].insertAdjacentHTML(
//         "afterend",
//         cardTemplate(item)
//       );
//     });
// })();

(async() => {
  const section = document.querySelector("section");
  const response = await fetch("http://localhost:8080/posts");
  const result = await response.json();
  // console.log(result);

  //form 뒤에 추가했을 때는 다시 재정렬해서 넣어야 역순 정렬이됨.
  //result.sort. 
  //배열 메서드를 사용해도 배열로 바뀜
  // const data = Array.from(result);
  // 마지막에 afterbegin을 할거면
  // data.sort((a, b) => a.no - b.no); 이렇게 정렬해야
  // 마지막이 위로 오게 됨.

  //data-no="${item.no}" 이걸로 삭제 관리.
  result.forEach(item => {
    section.insertAdjacentHTML("afterbegin", cardTemplate(item));
  });

    //시간을 원하는 형태로 바꾸는 방법 ↓
    // const time = new Date(item.createdTime);
    // const formattedTime = `
    // ${time.getFullYear()}-
    // ${(time.getMonth() + 1).toString().padStart(2, '0')}-
    // ${time.getDate().toString().padStart(2, '0')} 
    // ${time.getHours().toString().padStart(2, '0')}:
    // ${time.getMinutes().toString().padStart(2, '0')}:
    // ${time.getSeconds().toString().padStart(2, '0')}
    // `;

    //쉽게 new Date(item.createdTime).toLocaleString() 을 써도 된다!

    // const template = /*html*/
    //이렇게 하면 html 문서처럼 스타일 작성이 가능
    //(es6-string-html을 다운 받아야함).

})();



// 추가 기능
// (() => {
//   const form = document.forms[0];
//   const post = form.querySelector("button");

//   const title = form.querySelector("input");
//   const content = form.querySelector("textarea");

//   post.addEventListener("click", async (e) => {
//     e.preventDefault();

//     // 서버에 데이터 전송
//     const response = await fetch(
//       "http://localhost:8080/posts",
//       {
//         // HTTP Method
//         method: "POST",
//         // 보낼 데이터 형식은 json
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify({
//           title: title.value,
//           content: content.value,
//         }),
//       }
//     );
//     console.log(response);

//     const result = await response.json();
//     console.log(result);

//     // UI 생성
//     document.forms[0].insertAdjacentHTML(
//       "afterend",
//       cardTemplate(result.data)
//     );
//   });
// })();

// 삭제 기능(이벤트 위임)
(() => {
  document.body.addEventListener("click", (e) => {
    // alert(e.target.className);
    // e.target: 실제 이벤트가 발생한요소
    // 해당 클래스가 있는지 확인
    if (
      e.target.classList.contains("btn-remove")
    ) {
      // jsdoc type 힌트를 넣어줌
      /** @type {HTMLButtonElement} */
      const removeBtn = e.target;
      removeBtn.parentElement.parentElement.remove();
    }
  });
})();