// ...rest (pegar resto) ...spread

/*const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

const [primeiroNumero, segundoNumero, terceiroNumero, ...rest] = numeros;


console.log(primeiroNumero, segundoNumero, terceiroNumero)
console.log(rest)

*/


const pessoa = {
    nome: 'João',
    sobrenome: 'Lucas',
    idade: 23
}

const endereço = {
    rua: 'travessa firmino de brito',
    numero: 234
}

//Atribuição via estruturação.

const {rua: {rtrue = 'Rua dos caipós'}, numero: {nTrue = 55} } = endereço

const {nome: {nomeReal = 'Mateus'}, sobrenome: {sobrenomeReal = 'Gabriel'} } = pessoa;


console.log(nomeReal, sobrenomeReal, rtrue, nTrue);

