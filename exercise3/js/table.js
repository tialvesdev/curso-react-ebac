const tableData = [
  {
    name: "Jão Arvis",
    age: "Entre 18 e 30",
    pronouns: {
      1: "Ele/Dele",
      2: "Ela/Dela",
    },
    maritage: "Noivo",
  },
  {
    name: "Jão Arvis",
    age: "Entre 18 e 30",
    pronouns: {
      1: "Ele/Dele",
      2: "Ela/Dela",
    },
    maritage: "Noivo",
  },
  {
    name: "Jão Arvis",
    age: "Entre 18 e 30",
    pronouns: {
      1: "Ele/Dele",
      2: "Ela/Dela",
    },
    maritage: "Noivo",
  }
];

console.log(tableData);

/*
  1- Para cada objeto do array:

    1.1- Criar uma tr(Table Row)
    1.2- Adicionar uma classe para a tr
    1.3- Para cada atributo do objeto:

      1.3.1- Criar uma td(Table Data)
      1.3.2- Adicionar uma classe para a td
      1.3.3- Ver em qual atributo está:

        1.3.3.1- Se no 1º (name): 

          1.3.3.1.1- Pegar o texto do input
          1.3.3.1.2- Colocar o texto do input dentro da td
          1.3.3.1.3- Subir a td para a tr

        1.3.3.2- Se no 2º (age): 

          1.3.3.2.1- Analisar qual valor veio:

            1.3.3.2.1.1- Se o valor é 1, criar um texto "Menos de 18"
            1.3.3.2.1.2- Se o valor é 2, criar um texto "Entre 18 e 30"
            1.3.3.2.1.3- Se o valor é 3, criar um texto "Entre 31 e 60"
            1.3.3.2.1.4- Se o valor é 4, criar um texto "Mais de 60"

          1.3.3.2.2- Colocar o texto do input dentro da td
          1.3.3.2.3- Subir a td para a tr

        1.3.3.3- Se no 3º (pronouns):

          1.3.3.3.1- Para cada atributo:

            1.3.3.3.1.1- Analisar qual valor veio: 

              1.3.3.3.1.1.1- Se o valor é 1, criar o texto "Ele/Dele"
              1.3.3.3.1.1.1- Se o valor é 2, criar o texto "Elu/Delu"
              1.3.3.3.1.1.1- Se o valor é 3, criar o texto "Ela/Dela"
              1.3.3.3.1.1.1- Se o valor é 4, criar o texto com o valor digitado


          1.3.3.3.2- Concatenar caso tenha mais de um texto
          1.3.3.3.3- Colocar o texto do input dentro da td
          1.3.3.3.4- Subir a td para a tr

        1.3.3.4- Se no 4º (maritage):

          1.3.3.4.1- Analisar qual valor veio: 

            1.3.3.4.1.1- Se o valor é 1, criar o texto "Solteiro"
            1.3.3.4.1.2- Se o valor é 2, criar o texto "Casado"
            1.3.3.4.1.3- Se o valor é 3, criar o texto "Separado"
            1.3.3.4.1.4- Se o valor é 4, criar o texto "Divorciado"
            1.3.3.4.1.5- Se o valor é 4, criar o texto "Viúvo"

          1.3.3.4.2- Colocar o texto do input dentro da td
          1.3.3.4.3- Subir a td para a tr

    1.4- Subir a tr com as 4 td's

  2- Igualar o array com a tabela




*/