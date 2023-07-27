function createDiv(no, title, content, createdTime, creatorName) {
  const template =  /*html*/
    `<div data-no="${no}">
    <h4>작성자: ${creatorName}</h4>
    <hr>
    <h3>${no}. ${title}</h3>
    <p>${content}</p>
    <hr>
    <h5><sub>생성시간: ${new Date(createdTime).toLocaleString()}</sub></h5>
    <hr>
    </div>`;
    return template;
}


(async() => {
  const section = document.querySelector("section");
  const response = await fetch("http://localhost:8080/posts");
  const result = await response.json();
  // console.log(result);

  //배열 메서드를 사용해도 배열로 바뀜
  // const data = Array.from(result);
  // 마지막에 afterbegin을 할거면
  // data.sort((a, b) => a.no - b.no); 이렇게 정렬해야
  // 마지막이 위로 오게 됨.

  //data-no="${item.no}" 이걸로 삭제 관리.
  result.forEach(item => {
    section.insertAdjacentHTML("beforeend", createDiv(item.no, item.title, item.content, item.createdTime, item.creatorName));
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

//추가폼
(() => {

  //데이터를 추가하기 위해 엘레멘트 찾기
  const form = document.querySelector("form");
  const input = form.querySelector("input");
  const textbox = form.querySelector("textarea");

  const title = input;
  const content = textbox;

  const add = form.querySelector("button");

  add.addEventListener("click", async(e) => {
    e.preventDefault();

    if(title.value === ""){
      alert("제목을 입력해주세요.");
      return;
    }

    if(content.value === ""){
      alert("내용을 입력해주세요.");
      return;
    }

    //서버에 데이터를 전송
    const response = await fetch(
      "http://localhost:8080/posts", 
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: title.value,
          content: content.value,
        }),
      }
    );

    console.log(response);
    const result = await response.json();
    console.log(result);
    //이 위까지 데이터 전송에 대한 것.

    const section = document.querySelector("section");
    section.insertAdjacentHTML("afterbegin", createDiv(result.data.no, result.data.title, result.data.content, result.data.createdTime, result.data.creatorName));
    form.reset();

  });


})();
