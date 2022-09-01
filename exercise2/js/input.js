const form = document.getElementById("form");
const inputArea = document.getElementById("input-area");
const allowed = /[0-9+-.x*/]+/;
const op = ["+", "-", "*", "x", "X", "/"];


// Handler de tecla digitada no input
function handleInput(e) {
    // let inputText = inputArea.value;
    // let lastChar = inputText.slice(-1);

  // Se Backspace for pressionado
  if (e.data == null) {
    function handleDelete() {
        inputArea.value.slice(0, -1);
    }
    handleDelete();
    // Ou se qualquer tecla proibida for pressionada
  } else if (!allowed.test(e.data)) {
    // Não vai ser digitada
    e.preventDefault();
  }

  // Se digitarem um operador duas vezes
  function handleOp() {
    if (op.includes(inputArea.value.slice(-1)) && op.includes(e.data)) {
      // Deleta o digitado primeiro
      let value = inputArea.value.slice(0, -1);
      inputArea.value = value;
    }
  }
  handleOp();
}

// Handler de assim que a tecla for digitada
inputArea.addEventListener("beforeinput", e => handleInput(e));

function handleEquals(e) {
    // console.log(eval(inputArea.value));
    e.preventDefault();
    inputArea.value = eval(inputArea.value);
    return false;
}

form.addEventListener("submit", e => handleEquals(e));