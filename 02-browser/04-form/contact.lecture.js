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
  for(let item of result){
    //데이터 타입으로 삭제할 때는 tr에 <tr data-name="${item.name}">
    const template = `<tr data-email="${item.email}">
    <td>${item.name}</td><td>${item.phone}</td><td>${item.email}</td>
    </tr>`;
    tbody.insertAdjacentHTML("afterbegin", template);
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

  const add = form.querySelector("button");

  add.addEventListener("click", (e) => {
    e.preventDefault();

    if (name.value === "") {
      alert("이름을 입력해주세요.");
      return;
    }

    if (phone.value === "") {
      alert("전화번호를 입력해주세요.");
      return;
    }

    const tbody = document.querySelector("tbody");
    const tr = document.createElement("tr");
    // 삭제할 때 사용하려고 데이터 속성을 추가함
    tr.dataset.email = email.value;

    tr.innerHTML = `
    <td>
      ${name.value}
    </td>
    <td>
      ${phone.value}
    </td>
    <td>
      ${email.value}
    </td>`;

    tbody.prepend(tr);
    form.reset();
  });

  console.log("추가폼 처리 코드");
})();

// 삭제폼
(() => {
  const form = document.forms[1];

  const email = form.querySelector("input");
  const del = form.querySelector("button");

  del.addEventListener("click", (e) => {
    e.preventDefault();
    const tr = document.querySelector(
      `tr[data-email="${email.value}"]`
    );

    if (!tr) {
      alert("해당 이름의 연락처 없습니다.");
      return;
    }

    tr.remove();

    form.reset();
  });
})();