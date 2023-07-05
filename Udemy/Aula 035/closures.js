function outerFunction() {
    const outerVariable = 'Hello'

    function innerFunction () {
        console.log(outerVariable)
    }

    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction();

// - - - - -- - - -  - - - - - - -  - - - -



function retornaFuncao (nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Luiz')
const funcao2 = retornaFuncao('André')

console.log(funcao())
console.log(funcao2())