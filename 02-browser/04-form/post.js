(async() => {
  const body = document.body;
  const response = await fetch("http://localhost:8080/posts");
  const result = await response.json();

  //배열 메서드를 사용해도 배열로 바뀜
  // const data = Array.from(result);
  // 마지막에 afterbegin을 할거면
  // data.sort((a, b) => a.no - b.no); 이렇게 정렬해야
  // 마지막이 위로 오게 됨.

  //data-no="${item.no}" 이걸로 삭제 관리.
  result.forEach(item => {
    const template =  /*html*/
    `<div data-no="${item.no}">
    <h4>작성자: ${item.creatorName}</h4>
    <hr>
    <h3>${item.no}. ${item.title}</h3>
    <p>${item.content}</p>
    <hr>
    <h5><sub>생성시간: ${new Date(item.createdTime).toLocaleString()}</sub></h5>
    <hr>
    </div>`;
    body.insertAdjacentHTML("beforeend", template);
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
