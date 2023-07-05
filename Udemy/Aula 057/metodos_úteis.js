
//Copiar um objeto
/*const produto = {nome: 'Produto', preco: 1.8}
const caneca = Object.assign({}, produto, { material: 'porcelana'});

caneca.nome = 'Outro produto'
caneca.preco = 2.5;
console.log(caneca)
console.log(produto)*/

/*const produto = {nome: 'Produto', preco: 1.8}
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa.'
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
console.log(produto)*/

const produto = {nome: 'Produto', preco: 1.8, material: 'porcelana'}

const entries = Object.entries(produto)

for (const [chave, valor] of entries){
    console.log(`Chave: ${chave}, Valor: ${valor}`)
}


