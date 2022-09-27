const form = document.getElementById("form");
const anot = document.getElementById("anot");
const anotText = document.getElementById("anot-text");
const validateCheck = document.getElementById("validate-check");

anot.addEventListener("change", () => {
  if (anot.checked) {
    anotText.setAttribute("required", "");
    anot.value = anotText.value;
  } else {
    anotText.removeAttribute("required");
  }
});

form.addEventListener("submit", (e) => {
  const nameValue = document.getElementById("name").value;
  const ageValue = document.querySelector('input[name="age"]:checked').value;
  const pronounsChecked = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  const pronounsValue = {};
  const maritageValue = document.getElementById("marital").value;

  e.preventDefault();

  if (pronounsChecked.length == 0) {
    validateCheck.innerText = "Selecione no mínimo um pronome!";
    validateCheck.style.color = "#FF1100";
  } else {
    pronounsChecked.forEach((element, index) => {
      Object.assign(pronounsValue, { [index + 1]: element.value });
    });

    console.log(nameValue);
    console.log(ageValue);
    console.log(pronounsValue);
    console.log(maritageValue);
    
    const newPerson = {
        name: nameValue,
        age: ageValue,
        pronouns: pronounsValue,
        maritage: maritageValue
    }

    arrData.push(newPerson);
    document.getElementById("tbody").innerHTML = '';
    arrData.map(handleArr);
  }
});
