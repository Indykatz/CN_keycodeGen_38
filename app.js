// JS for keycode gen

const textArea = document.getElementById("textArea");
const key = document.getElementById("key");
const which = document.getElementById("which");
const code = document.getElementById("code");
const displayNum = document.getElementById("displayNum");
const returnStr = document.getElementById("returnStr");

window.addEventListener("keydown", (e) => {
  key.textContent = e.key;
  which.textContent = e.which;
  code.textContent = e.code;

  displayNum.textContent = e.which;
  returnStr.textContent = `"${e.key}" was pressed`;
});
