let num = [5, 8, 9, 3, 5]
num.push(1)
num.sort()
console.log(num)
console.log (`O vetor tem ${num.length} posições`)
console.log (`O primeiro valor do vetor é ${num[0]}`)


let pos = num.indexOf(9)
    if (pos == -1){
        console.log(`o Valor não foi encontrado`)
    }   else {
        console.log(`o valor está na posição ${pos}`)
    }
