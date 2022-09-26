const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = document.getElementById("name").value;
  console.log(nameValue);

  const ageValue = document.querySelector('input[name="age"]:checked').value;
  console.log(ageValue);

  // document.getElementById('anot').value = document.getElementById('anot-text').value;

  // const gendersValue = document.querySelectorAll('input[type="checkbox"]:checked').value;
  // console.log(gendersValue);

  const maritageValue = document.getElementById("marital").value;
  console.log(maritageValue)
});
