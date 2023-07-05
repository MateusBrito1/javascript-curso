// return 
// retorna um valor
// termina a função

function soma (a , b){
    return a + b;
}

console.log(soma(2, 7))

function soma2 (b, c){
    console.log(b + c);
}

soma2(10, 10)


//--------------------------//

function criaPessoa (usuario, senha){
    return { usuario, senha };
}

const p1 = criaPessoa('Luizinho', 'Strowt@') // Objeto com functions. Melhor forma.


const p2 = {    //Objeto sem as functions, funciona do mesmo jeito.
    usuario: 'Joaozinho',
    senha: 'Strowt11'
};

console.log(p1)
console.log(p2)


//-----------------------------------//
function falaFrase (comeco){
    function falaResto(resto){
        return comeco + '' + resto;
    }
    return falaResto;
}

const fala = falaFrase ('Olá')
const resto = fala ('mundo!')

console.log(resto);

//--------------------------------//

function criaMultiplicador (multiplicador){
    return function (n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador (2);
const triplica = criaMultiplicador (3);
const quadriplica = criaMultiplicador (4);

console.log(duplica(2))
console.log(duplica(3))
console.log(duplica(4))


/* O código cria a constante 'fala' que recebe o resultado da chamada da funcao 'falaFrase('Olá')'. Portanto a constante fala "se torna" uma funcao que executa a outra funcao 'falaResto' e que o valor começo == "Olá".

Depois, na linha 9, o codigo chama a função 'fala' passando o parametro "mundo!" e atribui o resultado à constante resto. O resultado dessa chamada seria a concatenação de "Olá" + "mundo!" */