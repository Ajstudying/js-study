const listA = document.querySelectorAll("a");

listA.forEach((a) => {
  a.addEventListener("click", (event) => {
    event.preventDefault();
    if(confirm("해당 사이트로 이동하시겠습니까?")){
      window.location.href = a.getAttribute('href');
    }
  })
})

//****** */
// listA.forEach((a) => {
//   a.addEventListener("click", (e) => {
//     confirm("해당 링크로 이동하시겠습니까?") ? "" : e.preventDefault(); 
//   });
// });

// listA.forEach((a) => {
//   a.addEventListener("click", (e) => {
//     if(!confirm("해당 링크로 이동하시겠습니까?")){
//       e.preventDefault();
//     }
//   });
// });



//html이 아래와 같이 작성되어 있어야 기능 설정이 가능하다.

/* <fieldset id="contents">
<legend>#contents</legend>
<p>
  How about to read <a href="https://wikipedia.org">Wikipedia</a> or visit <a href="https://w3.org"><i>W3.org</i></a> and learn about modern standards?
</p>
</fieldset> */


// contents.onclick = function(event) {

//   function handleLink(href) {
//     let isLeaving = confirm(`Leave for ${href}?`);
//     if (!isLeaving) return false;
//   }

//   let target = event.target.closest('a');

//   if (target && contents.contains(target)) {
//     return handleLink(target.getAttribute('href'));
//   }
// };