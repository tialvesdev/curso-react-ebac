function handleBtn(id) {
  let inputText = inputArea.value;
  let lastChar = inputText.slice(-1);

  const element = document.getElementById(id);
  const text = element.textContent;

  // allowed.test(element)
  if (op.includes(inputArea.value.slice(-1)) && op.includes(text)) {
    let value = inputArea.value.slice(0, -1);
    value += text;
    inputArea.value = value;
  } else if (id == "delete") {
    inputText = inputArea.value.slice(0, -1);
    inputArea.value = inputText;
  } else {
    inputArea.value += text;
  }
}
