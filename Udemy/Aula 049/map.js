const pessoas = [
  {
    nome: "Luiz",
    idade: 39,
    cargo: "gerente",
    entrada: "15.06.2013",
    salario: 3000,
  },
  {
    nome: "Mateus",
    idade: 52,
    cargo: "zelador",
    entrada: "12.09.2011",
    salario: 2000,
  },
  {
    nome: "Joana",
    idade: 34,
    cargo: "diretor",
    entrada: "19.01.2009",
    salario: 5000,
  },
];

// Array com os nomes das pessoas
const nomes = pessoas.map(({ nome }) => nome);

// Array com objetos contendo apenas a propriedade "idade" das pessoas
const idades = pessoas.map(({ idade }) => ({ idade }));

// Array com objetos contendo todas as propriedades originais das pessoas
// e adicionando uma nova propriedade "id" com base no índice do elemento no array
const ids = pessoas.map((pessoa, i) => ({ ...pessoa, id: i + 1 }));

console.log(ids);

/*const myPersons = (person) => {
    return {
        ...person,
        nome: person.nome,
        idade: person.idade,
        cargo: person.cargo        
    }
        
}


const myPerson2 = pessoas.map(myPersons)

console.log(myPerson2)*/

const numeros = [7, 8, 2, 5, 16, 88, 82, 3, 96, 35, 67];

/*const dobroNums = (nums) => {return nums * 2};

console.log(numeros.map(dobroNums));*/
