let num = [5, 8, 9, 3, 5]
num.push(1)         //Atribue um valor a ultima casa das variaveis.
num.sort()          //Deixa o conteudo (valor da variavel) em ordem crescente.
console.log(num)
console.log (`O vetor tem ${num.length} posições`)
console.log (`O primeiro valor do vetor é ${num[0]}`)


let pos = num.indexOf(9)              //Procura se tem o valor 9 nas variaveis.
    if (pos == -1){                    //Se não foi encontrado, o valor fica -1, logo, se a 'pos' for igual a -1, irá mostrar que não encontrou  o valor.
        console.log(`o Valor não foi encontrado`)
    }   else {
        console.log(`o valor está na posição ${pos}`)
    }
