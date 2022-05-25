// JS for keycode gen

const textArea = document.getElementById("textArea");
const key = document.getElementById("key");
const which = document.getElementById("which");
const code = document.getElementById("code");

window.addEventListener("keydown", (e) => {
  key.textContent = e.key;
  which.textContent = e.which;
  code.textContent = e.code;

  textArea.textContent = `${e.key} was pressed`;
});
