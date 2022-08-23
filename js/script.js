// File's Root
const root = document.getElementById("root");

// Hello World 1 (Setting variable and using it)
const hw1 = `1) Hello World - JS`;

// Inner HTML for the Root
root.innerHTML = `
<header>
    <h1> Exercício 1 - EBAC React </h1>
</header>

<section id="hwSection">
    ${hw1}
    <p id="hw2"></p>
</section>
`;

// Root's Section for the Hello Worlds
const hwSection = document.getElementById("hwSection");


// Hello World 2 (Getting an element and putting it a text)
const hw2 = document.getElementById("hw2");
hw2.innerText = `2) Hello World - JS`;


// Hello World 3 (Creating an element and appending it)
const hw3 = document.createElement("p");
const hw3Text = document.createTextNode("3) Hello World - JS");

hw3.appendChild(hw3Text);
hw2.after(hw3);


// Hello World 4 (Style)
const hw4 = document.createElement("p");
const hw4Text = document.createTextNode("4) Hello World - CSS");
hw4.classList.add("hw4");

hw4.appendChild(hw4Text);
hw3.after(hw4);


// Hello World 5 (Style)
const hw5 = document.createElement("p");
const hw5Text = document.createTextNode("5) Hello World - CSS");
hw5.classList.add("hw5");

hw5.appendChild(hw5Text);
hw4.after(hw5);


// Hello World 6 (Style)
const hw6 = document.createElement("p");
const hw6Text = document.createTextNode("6) Hello World - CSS");
hw6.classList.add("hw6");

hw6.appendChild(hw6Text);
hw5.after(hw6);


// Hello World 7 (Style)
const hw7 = document.createElement("p");
const hw7Text = document.createTextNode("7) Hello World - CSS");
hw7.classList.add("hw7");

hw7.appendChild(hw7Text);
hw6.after(hw7);


// Hello World 8 (Style)
const hw8 = document.createElement("p");
const hw8Text = document.createTextNode("8) Hello World - CSS");
hw8.classList.add("hw8");

hw8.appendChild(hw8Text);
hw7.after(hw8);


// // Hello World 9 (Style)
const hw9 = document.createElement("p");
const hw9Text = document.createTextNode("9) Hello World - CSS");
hw9.classList.add("hw9");

hw9.appendChild(hw9Text);
hw8.after(hw9);


// // Hello World 10 (Style)
const hw10 = document.createElement("p");
const hw10Text = document.createTextNode("10) Hello World - CSS");
hw10.classList.add("hw10");

hw10.appendChild(hw10Text);
hw9.after(hw10);