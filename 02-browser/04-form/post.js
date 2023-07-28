// function createDiv(no, title, content, createdTime, creatorName) {
//   const template =  /*html*/
//     `<div data-no="${no}">
//     <h4>작성자: ${creatorName}</h4>
//     <hr>
//     <h3>${no}. ${title}</h3>
//     <p>${content}</p>
//     <hr>
//     <h5><sub>생성시간: ${new Date(createdTime).toLocaleString()}</sub></h5>
//     <hr>
//     </div>`;
//     return template;
// }
function cardTemplate(item) {
  if(item.image == null){
    const template =  /*html*/
    `<article data-no="${item.no}">
    <div>
    <h4>작성자: ${item.creatorName}</h4>
    <button class="remove">X</button>
    </div>
    <hr>
    <h3>${item.title}</h3>
    <p>${item.content}</p>
    <hr>
    <h5><sub>생성시간: ${new Date(item.createdTime).toLocaleString()}</sub></h5>
    <hr>
    </article>`;
    return template;
  } else {
    const template =  /*html*/
    `<article data-no="${item.no}">
    <div>
    <h4>작성자: ${item.creatorName}</h4>
    <button class="remove">X</button>
    </div>
    <hr>
    <h3>${item.title}</h3>
    <p>${item.content}</p>
    <img src="${item.image}" alt="${item.no}">
    <hr>
    <h5><sub>생성시간: ${new Date(item.createdTime).toLocaleString()}</sub></h5>
    <hr>
    </article>`;
    return template;
  }
}


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
    section.insertAdjacentHTML("beforeend", cardTemplate(item));
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

//추가
(() => {

  //데이터를 추가하기 위해 엘레멘트 찾기
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input");
  const textbox = form.querySelector("textarea");

  const title = inputs[0];
  const content = textbox;
  const file = inputs[1];
  console.log(title);
  console.log(file);

  const add = form.querySelector("button");

  add.addEventListener("click", (e) => {
    e.preventDefault();

    if(title.value === ""){
      alert("제목을 입력해주세요.");
      return;
    }

    if(content.value === ""){
      alert("내용을 입력해주세요.");
      return;
    }

    //데이터를 서버에 전송하고, UI 요소 생성
    async function createPost(image) {
      //서버에 전송하면 UI를 생성한다.

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
            image: image ? image : null,
          }),
        }
      );
      console.log(response);
      const result = await response.json();
      console.log(result);
      //이 위까지 데이터 전송에 대한 것.

      const section = document.querySelector("section");
      section.insertAdjacentHTML("afterbegin", cardTemplate(result.data));
      form.reset();

    }

    if (file.files[0]) {
      //파일이 있을 때
      //파일 읽은 후 이벤트 실행
      const reader = new FileReader();

      reader.addEventListener(
        "load", 
        async(e) => {
          console.log(e);
          const image = e.target.result;
          createPost(image);
        }
      );
      reader.readAsDataURL(file.files[0]);
    }else {
      //파일이 없을 때
      createPost();
    }
    

  });
 


})();

//삭제
(() => {
  
  const section = document.querySelector("section");
  const buttons = document.querySelectorAll("button");

  
  section.addEventListener("click", async(e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(typeof(e.target));

    if(e.target !== buttons[0] && e.target.classList.contains("remove")){

      const removeArticle = e.target.closest("article");
      const removeNumber = removeArticle.dataset.no;
      
      //서버연결
      await fetch(`http://localhost:8080/posts/${removeNumber}`,
      {
        method: "DELETE",
      });
      removeArticle.remove();
    }
    

    // console.log(`article[data-no="${removeNumber.value}"]`);
    // const removeDiv = document.querySelector(
    //   `article[data-no="${removeNumber.value}"]`
    // );

    // if(!removeDiv) {
    //   alert("해당 포스트가 없습니다.");
    //   return;
    // }

    // removeDiv.remove();
    // deleteForm.reset();
  })

})();