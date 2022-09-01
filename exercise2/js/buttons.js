function handleBtn(id) {
  const element = document.getElementById(id);
  const text = element.textContent;

  if (op.includes(inputArea.value.slice(-1)) && op.includes(text)) {
    let value = inputArea.value.slice(0, -1);
    value += text;
    inputArea.value = value;
  } else if (id == "delete") {
    handleDelete();
  } else {
    inputArea.value += text;
  }
}

function handleDelete() {
  inputText = inputArea.value.slice(0, -1);
  inputArea.value = inputText;
}
