//Filter > Sempre retorna um array, com a mesma quantidade de elementos ou menos.

const numeros = [7, 8, 2, 5, 16, 88, 82, 3, 96, 35, 67]

const myNums =  (numero) => numero > 30

const myNums1 = numeros.filter(myNums)

console.log(myNums1)



const pessoas = [
    {nome: 'Luiz', idade: 39, cargo: 'gerente', entrada: '15.06.2013', salario: 3000},
    {nome: 'Mateus', idade: 52, cargo: 'zelador', entrada: '12.09.2011', salario: 2000},
    {nome: 'Joana', idade: 34, cargo: 'diretor', entrada: '19.01.2009', salario: 5000},
]




 function aumentarCargo(nomePessoa, novoCargo) {
    const pessoa = pessoas.find(p => p.nome === nomePessoa); 
        if(pessoa) {
            pessoa.cargo = novoCargo;
        }
}

aumentarCargo('Luiz', 'funcionario do mes')

console.log(pessoas)







