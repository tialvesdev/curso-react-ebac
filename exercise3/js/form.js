const form = document.getElementById('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameValue = document.getElementById('name').value;
    console.log(nameValue);

    const ageValue = document.querySelector('input[name="age"]:checked').value;
    console.log(ageValue);

    const gendersValue = document.querySelector('input[name="age"]:checked').value;
    console.log(ageValue);
});
