// template: UI형식의 틀
function createRow(name, phone, email, image) {
  // 1. 요소 생성
  const tr = document.createElement("tr");

  // 삭제할 때 사용하려고 데이터 속성을 추가함
  //** 서버에서 받은 데이터의 유일한 속성(key) */
  // 2. 요소의 속성 설정
  tr.dataset.email = email;
  tr.innerHTML = `
  <td>${name}</td>
  <td>${phone}</td>
  <td>${email}</td>  
  <td>${image ?
    `<img width="auto" height="30" src="${image}" alt="${name}">` : ""} </td>
  `;
  return tr;
}



//서버에서 데이터 조회 후 화면에 출력
//JSON 데이터로 tr목록을 만드는 것

// async: 함수를 비동기적으로 실행되게 함.
// async 함수만 따로 떼서 너만 따로 돌아~ 하는 식으로 해줌.
//UI컨텍스트와 별개의 컨텍스트로 실행되게 함.

//프로세스(Process): 프로그램이 실행돼서 메모리(램)에 올라가면 프로세스
//스레드(thread): 프로세스의 실행단위를 나눈 것.
// 컨텍스트(context): 스레드내의 시간을 분할하여 CPU처리할 수 있게 한 단위

//컨텍스트1(우선순위1), 컨텍스트2(우선순위2)
// 우선순위에 따라서 1을 좀더 시간을 많이 할애하고, 2는 약간만 할애
// 여기서는 async가 시작을 먼저하지만, await 만나서 잠시 멈췄다가, 
// 아래의 contact 코드가 돌아가고,
// 나중에 await들이 돌아간다.
(async() => { 
  //fetch(..)
  // http접속을 통해서 데이터를 가져오거나 보내거나 할 수 있음.
  // await Promise 객체
  //Promise 객체 처리가 완료되면(resolve), 리턴값을 받음.
  //await 키워드는 async 함수 안에서만 사용 가능.
  const response = await fetch("http://localhost:8080/contacts");
  const result = await response.json();
  console.log(result);


  const tbody = document.querySelector("tbody");
  //배열 반복을 해서 tr을 만든 다음에 tbody 가장 마지막 자식에 추가
  for (let item of result) {
    tbody.append(
      createRow(
        item.name,
        item.phone,
        item.email,
        item.image
      )
    );
  }
})();

//함수 선언식
// async function asyncTask(){}
// asyncTask();

//async 함수 표현식
// const asyncTask = async () => {};
// asyncTask();

//ES2015버전에 나온 문법
// (() => {
//   //fetch(..)
//   // http접속을 통해서 데이터를 가져오거나 보내거나 할 수 있음.
//   // Promise
//   // Promise 함수는 처리완료됐을 때 처리함수와,
//   // 오류일 때 처리함수를 매개변수를 받는 함수
//return new Promise(...)
  
//   // 1. UI 처리하는 컨텍스트
//   // console.log(1);

//   // 2. 네트워크 요청을 처리하는 컨텍스트
//   //네트워크 요청이 완료되면
//   //.then((reponse) => {})
//   //then의 매개변수 함수가 실행됨.
//   // 응답객체를 매개변수로 넘겨준다.

//   // //ES2015버전에 나온 문법
//   // //비동기적(다 따로 돌리고 마지막에 끝나는 애한테 모으는것)
//   // //인 처리순서를 보장하기 위한 방법
//   // fetch("http://localhost:8080/contacts").then(response => {
//   //   console.log(response);
//   //   console.log(2);
//   //   //res.json() -> json응답을 자바스크립트 객체(배열)로 변환 ↓
//   //   return response.json();
//   //   //객체(배열)로 변환된 값을 사용 ↓
//   // }).then((result) => {
//   //   console.log(result);
//   // });

//   // 3. UI처리하는 컨텍스트
//   // console.log(3); // 1, 3, 2
//   //네트워크 요청처리는 처리시간이 길다.
//   // UI처리와 네트워크 처리를 같은 컨텍스트에서 하면
//   // 네트워크 요청 처리가 끝날 때까지 브라우저는 멈춤
// })();

//추가폼
(() => {
  const form = document.forms[0];
  const inputs = form.querySelectorAll("input");

  const name = inputs[0];
  const phone = inputs[1];
  const email = inputs[2];
  const file = inputs[3]; //input type="file"

  const add = form.querySelector("button");

  add.addEventListener("click", (e) => {
    e.preventDefault();

    if (email.value === "") {
      alert("이메일을 입력해주세요.");
      return;
    }

    if (name.value === "") {
      alert("이름을 입력해주세요.");
      return;
    }

    if (phone.value === "") {
      alert("전화번호를 입력해주세요.");
      return;
    }

     // 데이터를 서버에 전송하고, UI요소 생성
    async function createContact(image) {
      /// --- 서버전송하면 UI 생성
      // 서버에 데이터를 전송
      // fetch(url, options)
      const response = await fetch(
        "http://localhost:8080/contacts",
        {
          // HTTP Method
          method: "POST",
          // 보낼 데이터 형식은 json
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: email.value,
            name: name.value,
            phone: phone.value,
            image: image ? image : null,
          }),
        }
      );
      console.log(response);
      const result = await response.json();
      console.log(result);
      // 화면에 요소를 추가하는 것은 데이처리가 정상적으로 된 다음에
      // 서버에서 응답받은 데이터
      const { data } = result;
      // --- 3. 어딘가(부모, 다른요소)에 추가한다(append, prepend);
      document
        .querySelector("tbody")
        .prepend(
          createRow(
            data.name,
            data.phone,
            data.email,
            data.image
          )
        );
      form.reset();
    }

    if (file.files[0]) {
      // 파일이 있을 때
      const reader = new FileReader();
      // reader로 파일을 읽기가 완료되면 실행되면 이벤트 핸들러 함수
      reader.addEventListener(
        "load",
        async (e) => {
          console.log(e);
          // file -> base64 data-url
          const image = e.target.result;
          createContact(image);
        }
      );
      // 파일을 dataURL(base64)로 읽음
      reader.readAsDataURL(file.files[0]);
    } else {
      // 파일이 없을 때
      createContact();
    }

    // return;
  });

  console.log("추가폼 처리 코드");
})();


// 삭제폼
(() => {
  const form = document.forms[1];

  const email = form.querySelector("input");
  const del = form.querySelector("button");


  del.addEventListener("click", async(e) => {
    e.preventDefault();

    //서버통신
  await fetch(`http://localhost:8080/contacts/${email.value}`, 
  {
    method: "DELETE",
  });


    const tr = document.querySelector(
      `tr[data-email="${email.value}"]`
    );

    if (!tr) {
      alert("해당 이메일의 연락처 없습니다.");
      return;
    }

    tr.remove();

    form.reset();
  });
})();