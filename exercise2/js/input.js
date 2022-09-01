const form = document.getElementById("form");
const inputArea = document.getElementById("input-area");
const allowed = /[0-9+-.x*/]+/;
const op = ["+", "-", "*", "x", "X", "/"];

function handleInput(e) {
  if (e.data == null) {
  } else if (!allowed.test(e.data)) {
    e.preventDefault();
  }

  if (op.includes(inputArea.value.slice(-1)) && op.includes(e.data)) {
    let value = inputArea.value.slice(0, -1);
    inputArea.value = value;
  }
}

inputArea.addEventListener("beforeinput", (e) => handleInput(e));

function handleEquals(e) {
  e.preventDefault();
  inputArea.value = eval(inputArea.value);
}

form.addEventListener("submit", (e) => handleEquals(e));
