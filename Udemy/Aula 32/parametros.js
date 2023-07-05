
// Argumentos que sustenta todos os argumentos enviados.
/*function funcao (a, b, c){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total, a, b, c);
}
funcao (8 , 9, 10 , 69 , 78, 96)*/

/*function funcao (a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
}
funcao (1, 2, 3, 4)*/

/*function funcao (a , b = 0, c = 4 ){
    console.log(a + b + c)
}
funcao (5, 20)*/


//Desestruturação

/*function funcao ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}
funcao (['Mateus Gabriel', 'Brito', 30])*/


function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '%') acumulador %= numero;
        if(operador === '**') acumulador **= numero;
    }
    console.log(acumulador);
}

conta('+', 3, 20, 30, 40, 50)