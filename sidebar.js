(() => {
  const sidebar = document.createElement("aside");
  sidebar.style.position = "fixed";
  sidebar.style.height = "100vh";
  sidebar.style.width = "200px";

  sidebar.innerHTML = /*html */ `
    <ul>
      <li><a href="/post/post.html">Posts</a></li>
      <li><a href="/contact/contact.html">Contacts</a></li> 
      <li><a href="/todo/todo.html">TodoList</a></li> 
      <li><a href="#">Coming soon</a></li>
    </ul>
  `;

  document.body.prepend(sidebar);
})();