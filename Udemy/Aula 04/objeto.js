function criaPessoa (nome, sobrenome, idade, peso){
    return {nome, sobrenome, idade, peso};
}

const pessoaUm = criaPessoa ('Mateus', 'Gabriel', 21, '60kg')
const pessoaDois = criaPessoa ('Joao', 'Petrovich', 27, '10kg')
const pessoaTres = criaPessoa ('Mariana', 'Brito', 26, '30kg')
const pessoaQuatro = criaPessoa ('Jean', 'Moreira', 29, '50kg')
const pessoaCinco = criaPessoa ('Lucas', 'Oliveira', 56, '70kg')

console.log(pessoaUm, pessoaDois, pessoaTres, pessoaQuatro, pessoaCinco);
