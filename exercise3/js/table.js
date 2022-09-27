const arrData = [];
let c = 1;

// Handler of arr.map
function handleArr(element, index, array) {
  const newTr = document.createElement("tr");
  newTr.classList.add("tr");

  for (const key in element) {
    // console.log(`${key}: ${element[key]}`, c);

    const newTd = document.createElement("td");
    newTd.classList.add("td");

    if (c === 3) {

      const pronsString = Object.values(element.pronouns).join(' - ');

      const text = document.createTextNode(pronsString);
      newTd.appendChild(text);

    } else {

      const text = document.createTextNode(element[key]);
      newTd.appendChild(text);

    }

    newTr.appendChild(newTd);

    c == 4 ? c = 1 : c++;
  }

  document.getElementById("tbody").appendChild(newTr);


}

const arrToTable = arrData.map(handleArr);
