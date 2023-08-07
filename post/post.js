let currentPage = 0; //현재 페이지 번호
let isLastPage = false; //마지막 페이지 인지 여부 
const MAX_MEMO = 5;// 고정된 메모 갯수
let currentQuery = ""; // 현재 검색 키워드

//메모 형태
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
    <div><button class="btn-modify">:</button></div>
    ${imageElement}
    <hr>
    <h5><sub>생성시간: ${new Date(item.createdTime).toLocaleString()}</sub></h5>
    <hr>
    </article>`;
    return template;
}

// 메모를 찾아서 조회 후 화면에 보이는 메서드
async function getPagedMemo(page, query){
  const section = document.querySelector("section");
  let url = "";
  if(query){
    url = `http://localhost:8080/posts/paging/search?page=${page}&size=${MAX_MEMO}&query=${query}`
  }else{
    url = `http://localhost:8080/posts/paging?page=${page}&size=${MAX_MEMO}`;
  }
  
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie(
        "token"
      )}`,
    },
  });
  // 401: 미인증, 403: 미인가(허가없는)
  if ([401, 403].includes(response.status)) {
    // 로그인 페이지로 튕김
    alert("인증처리가 되지 않았습니다.");
    window.location.href = "/login.html";
  }
  
  const results = await response.json();
  
  //목록 초기화
  section.innerHTML = "";
  const result = results.content;
  result.forEach(item => {
    section.insertAdjacentHTML("beforeend", cardTemplate(item));
  });

  currentPage = results.number; //현재 페이지 설정
  isLastPage = results.last; // 마지막 페이지 여부
      
  //이전 /다음 버튼 활성화 처리
  setBtnActive();
}

//이전 /다음 버튼 활성화 처리 메서드
function setBtnActive() {
  //버튼 선택
  const buttons = document.forms[1].querySelectorAll("button");

  const btnPrev = buttons[2];
  const btnNext = buttons[3];

  //첫번째 페이지면 이전 버튼 비활성화
  if(currentPage === 0){
    btnPrev.disabled = true;
  }else{
    btnPrev.disabled = false;
  }
  //마지막 페이지면 다음 버튼 비활성화
  if(isLastPage) {
    btnNext.disabled = true;
  }else{
    btnNext.disabled = false;
  }
}

//화면을 처음 켰을 때 첫번째 페이지 조회
(async() => {
  window.addEventListener("DOMContentLoaded", () => {
    getPagedMemo(0);
  });
})();

//페이징
(() => {
  const buttons = document.forms[1].querySelectorAll("button");

  const btnPrev = buttons[2];
  const btnNext = buttons[3];

  //이전 버튼
  btnPrev.addEventListener("click", (e) => {
    e.preventDefault();
    currentPage > 0 && getPagedMemo(currentPage -1, currentQuery);
  });
  //다음 버튼
  btnNext.addEventListener("click", (e) => {
    e.preventDefault();
    !isLastPage && getPagedMemo(currentPage + 1, currentQuery);
  });
})();

//검색 기능
(() => {
  const textQuery = document.forms[1].querySelector("input");
  const btnSearch = document.forms[1].querySelector("button");

  btnSearch.addEventListener("click", (e) => {
    e.preventDefault();
    currentQuery = textQuery.value;
    getPagedMemo(0, currentQuery);
  });

  textQuery.addEventListener("keyup", (e) => {
    e.preventDefault();
    if(e.key.toLocaleLowerCase() === "enter"){
      currentQuery = textQuery.value;
      getPagedMemo(0, currentQuery);
    }
  });
})();

//검색 조건 초기화
(() => {
  const btnReset = document.forms[1].querySelectorAll("button")[1];
  btnReset.addEventListener("click", (e) => {
    e.preventDefault();
    //검색 박스 초기화
    document.forms[1].reset();
    //검색 조건 값 초기화
    currentQuery = "";
    //검색 조건이 초기화 되면 0번 페이지에서 다시 조회
    getPagedMemo(0, currentQuery);
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
    async function createPost(image) {
      //서버에 전송하면 UI를 생성한다.

      const response = await fetch(
        "http://localhost:8080/posts",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${getCookie(
              "token"
            )}`,
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
        headers: {
          Authorization: `Bearer ${getCookie(
            "token"
          )}`,
        },
      });
      removeArticle.remove();
      window.location.reload();
      
    }
    
    
  })

})();

//수정
(() => {
  document.querySelector("section").addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);
    if(e.target.classList.contains("btn-modify")){
      const modifyArticle = e.target.closest("article");
      console.log(modifyArticle);
      console.log(modifyArticle.querySelector("h3").innerHTML);
     
      //레이어 띄우기
      /** @type {HTMLDivElement} */
      const layer = document.querySelector("#modify-layer");
      layer.hidden = false;

      //레이어 내부에 선택값을 채워넣음
      const title = modifyArticle.querySelector("h3");
      layer.querySelector("input").value = title.innerHTML;

      const textbox = modifyArticle.querySelector("p");
      layer.querySelector("textarea").value = textbox.innerHTML;

      // 확인 / 취소 버튼에 이벤트 핸들러 추가

      const buttons = layer.querySelectorAll("button");
      //취소 버튼
      buttons[1].addEventListener("click", (e) => {
        e.preventDefault();
        layer.hidden = true;
      });

      //수정
      buttons[0].addEventListener("click", async(e) => {
        e.preventDefault();

        const modifyNum = modifyArticle.dataset.no;
        
        const modifyTitle = layer.querySelector("input").value;
        const modifyTextbox = layer.querySelector("textarea").value;

        //서버연동
        const response = await fetch(
          `http://localhost:8080/posts/${modifyNum}` , {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${getCookie(
              "token"
            )}`,
          },
          body: JSON.stringify ({
            title: modifyTitle,
            content: modifyTextbox,
          }),
        });
        console.log(response.status);

        //데이터 셀의 값을 수정입력으로 바꿈.
        title.innerHTML = layer.querySelector("input").value;
        textbox.innerHTML = layer.querySelector("textarea").value;
        layer.hidden = true;
      })



    }

  });
})();