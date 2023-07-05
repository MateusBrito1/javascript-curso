//                0         1          2
const alunos = ['Mateus', 'Mariana', 'João'];





alunos.shift() //Remove o primeiro do array.

alunos.pop(); //Tira o ultimo elemento do array.
const removido = alunos.pop() //guarda em uma variavel o removido.

alunos.unshift ('Luiza')  //Adicionar os elementos no começo do array.

alunos[0] = 'Eduardo'    //Editar os elementos.

alunos.push('Luiza', 'Fabio') //Adicionar os elementos no último lugar.

console.log(alunos.slice(0, -2)); //Para fatiar começando do final.