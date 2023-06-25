/*const nome = 'Luiz';

function falaNome (){
    const nome = 'Otavio' //Irá dar certo porque está atribuido nesse escopo. e o 'Luiz' deixará de ser luiz e virará 'otavio'.
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Otavio'  //Colocando o nome aqui não irá funcionar, porque ele só vai pegar os vizinhos dele (falanome). logo, será o de cima, que está com 'luiz'
    falaNome();     //Chamando a função falanome que será o 'const nome'
}

usaFalaNome();*/

/*const nome = "Mateus"

function falaNome (nSobrenome) {
    let nome = "João"
    console.log(nome, nSobrenome)
}

function falaNomeSobrenome(sobrenome) {
    return falaNome (sobrenome);
}

falaNomeSobrenome("Brito")*/


function myName (newName){
    const name = newName || 'Mateus'
    function sayMyName (otherName){
        console.log('Hello, ' + otherName + '! My name is ' + name);
    }
    return sayMyName
}

function falaName (nome) {
     return myName(nome);
}

const nameFunction = falaName();

nameFunction('John');