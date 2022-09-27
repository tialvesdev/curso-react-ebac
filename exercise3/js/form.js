const form = document.getElementById("form");
const anot = document.getElementById("anot");
const anotText = document.getElementById("anot-text");

anot.addEventListener("change", () => {
  if (anot.checked) {
    anotText.setAttribute("required", "");
    console.log("sim");
    anot.value = anotText.value;
  } else {
    anotText.removeAttribute("required");
    console.log("nao");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = document.getElementById("name").value;
  console.log(nameValue);

  const ageValue = document.querySelector('input[name="age"]:checked').value;
  console.log(ageValue);

  const gendersChecked = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  const gendersValue = {};
  gendersChecked.forEach((element, index) => {
    Object.assign(gendersValue, { [index + 1]: element.value });
  });
  console.log(gendersValue);

  const maritageValue = document.getElementById("marital").value;
  console.log(maritageValue);
});
