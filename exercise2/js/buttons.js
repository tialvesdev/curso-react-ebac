function handleBtn(id) {
    let inputText = inputArea.value;
    let lastChar = inputText.slice(-1);
    
    const element = document.getElementById(id);
    const text = element.textContent;

    // allowed.test(element)
    if(false) {
        // if (op.includes(inputText.slice(-1))) {
        //     inputText += inputText.slice(-1);
        //   }
    } else if (id == 'delete') {
        inputText = inputArea.value.slice(0, -1);
        inputArea.value = inputText;
    } else {
        inputArea.value += text;
    }
    console.log(text);
}