const elem = document.getElementById("div-elem");
      console.log(elem);
      console.log(elem.innerHTML);

      elem.style.background = "red";

      //조건에 맞는 모든 요소(여러개)
      const elements = document.querySelectorAll("ul > li:last-child");
      console.log(elements);

      //조건에 맞는 처음 요소(한개)
      const div = document.querySelector("#div-elem");
      console.log(div);

      //태그 기준으로 선택
      // document.getElementsByTagName("li")
      document.querySelectorAll("li");

      //클래스 기준으로 선택
      document.getElementsByClassName("item");
      document.querySelector("item");

      //name 속성 기준 선택
      // const radios = document.getElementsByName("rdo");
      // console.log(radios);

      //css 선택자
      //[속성명=값] {...}
      const radios = document.querySelectorAll("[name=rdo]");
      console.log(radios);
      
      //div id=elem > span


      const span = document.querySelector("#div-elem > span");
      console.log(span);


      //#div-elem
      //#div-elem.querySelector
      //자주선택 부모요소를 js셀렉터로 객체화를 해놓으면
      //자식요소 접근하기 편하다.
      const divElem = document.querySelector("#div-elem");

      const span2 = divElem.querySelector("span");
      console.log(span2);

      const items = divElem.querySelectorAll("ul > li");
      console.log(items);
      