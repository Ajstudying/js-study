
function cardTemplate(item) {
  const imageElement = item.image ? `<img src="${item.image}" alt="${item.no}">` : "";
    const template =  /*html*/
    `<article data-no="${item.no}">
    <div>
    <h4>작성자: ${item.creatorName}</h4>
    <button class="remove">X</button>
    </div>
    <hr>
    <h3>${item.title}</h3>
    <p>${item.content}</p>
    ${imageElement}
    <hr>
    <h5><sub>생성시간: ${new Date(item.createdTime).toLocaleString()}</sub></h5>
    <hr>
    </article>`;
    return template;
}


(async() => {
  const section = document.querySelector("section");
  const response = await fetch("http://localhost:8080/posts");
  const result = await response.json();

  result.forEach(item => {
    section.insertAdjacentHTML("beforeend", cardTemplate(item));
  });


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
    // async function createPost(image) {
    //   //서버에 전송하면 UI를 생성한다.

    //   const response = await fetch(
    //     "http://localhost:8080/posts",
    //     {
    //       method: "POST",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         title: title.value,
    //         content: content.value,
    //         image: image ? image : null,
    //       }),
    //     }
    //   );
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
  // const buttons = document.querySelectorAll("button");

  
  section.addEventListener("click", async(e) => {
    e.preventDefault();
    console.log(e.target);

    //e.target !== buttons[0] &&
    if(e.target.classList.contains("remove")){

      const removeArticle = e.target.closest("article");
      const removeNumber = removeArticle.dataset.no;
      
      //서버연결
      await fetch(`http://localhost:8080/posts/${removeNumber}`,
      {
        method: "DELETE",
      });
      removeArticle.remove();
    }

  })

})();