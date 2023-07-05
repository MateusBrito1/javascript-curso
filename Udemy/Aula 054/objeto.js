const pessoa = {
    nome: 'Mateus',
    sobrenome: 'Gabriel'
}

const chave = 'sobrenome'
console.log(pessoa[chave])



const pessoa1 = new Object ();
pessoa1.nome = 'mateus'
pessoa1.sobrenome = 'gabriel'
pessoa1.idade = 27
pessoa1.falarNome = function () {
    return (`${this.nome} ${this.sobrenome} está falando seu nome`)
}
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date ();
    return dataAtual.getFullYear() - this.idade;
}


for (const key in pessoa1) {
        console.log(pessoa1[key])
}


//Criar clientes.

//Factory functions
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,  
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otavio')
console.log(p1.nomeCompleto)


//Function Constructor

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome =sobrenome;
}

// new - cria um objeto vazio {} <- e this entra nesse objeto vazio
const p12 = new Pessoa('Luiz', 'Otavio')
console.log(p1)

