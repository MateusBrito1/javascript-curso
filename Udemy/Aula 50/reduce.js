
//Somando os números.
/*const numeros = [7, 8, 2, 5, 16, 88, 82, 3, 96, 35, 67];

const somandoArray = numeros.reduce((accumulator, valor) => accumulator + valor, 0)

//console.log(somandoArray)

//Juntar as strings
const strings = ['Mateus', ' ', 'Gabriel']

const concatenarString = strings.reduce((accumulator, valor) => accumulator + valor, "")

//console.log(concatenarString)


//Pegar o maior número
const numbers1 = [3, 2, 1, 9, 10, -1, 99, 99.9, 98]

const max = numbers1.reduce((accumulator, valor) => Math.max(accumulator, valor))

console.log(max)*/



const numbers = [1, 2, 3, 4, 5, 6]

const soma = numbers.reduce((accumulator, valor) => {
    return valor % 2 === 0? accumulator + valor : accumulator;
})

console.log("A soma dos números pares é:", soma)


const highNumber = [1, 6, 7, 8, 11, 22, 67, 9.9, 22]



const myNumber = highNumber.filter(numeros => numeros > 10)

console.log(myNumber)


const pessoas = [
    { nome: 'Luiz', idade: 25 },
    { nome: 'Mateus', idade: 30 },
    { nome: 'Joana', idade: 27 },
  ];

  const myPersons = pessoas.find(({ nome }) => nome === 'Mateus')

  console.log(myPersons)


  const numbers1 = [1, 2, 3, 4, 5];

  const dobrados = numbers.map(number => number * 2)

  console.log(dobrados)

  