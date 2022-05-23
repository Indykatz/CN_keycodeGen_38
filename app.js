page2.style.display = "none";

window.addEventListener("keydown", (e) => {
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");

  page1.style.display = "none";
  page2.style.display = "flex";

  const key = document.getElementById("key");
  //   const location = document.getElementById("location");
  const which = document.getElementById("which");
  const code = document.getElementById("code");

  key.textContent = e.key;
  //   location.textContent = e.location;
  which.textContent = e.which;
  code.textContent = e.code;
});
