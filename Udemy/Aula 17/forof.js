

const nome = ['Mateus', 'Gabriel']

// for classico
for (let i = 0; i < nome.length; i++){
    console.log(nome);
}

// for of 
for (let i of nome){
    console.log(i);
}

// for in
for(let i in nome){
    console.log(i, nome[i]);
}

//For classico - Geralmente com iteráveis (arrays ou strings)

//For in - Retorna o índice ou chave (string, array ou objetos)

//For of - Retorna o valor em si (iteráveis, arrays ou strings)