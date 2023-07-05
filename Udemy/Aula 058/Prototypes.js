// Construtora -> molde (classe)
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
   // this.nomeCompleto = () => 'Original: ' + this.nome + ' ' + this.sobrenome;
}

// Instância
Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Mateus', 'G.') // <- Pessoa = Função construtora
const data = new Date() 

console.dir(pessoa1)
console.dir(data)


// - - - - - - - - -  - - - - - - - - - - - - -
const Dog = {
    eating() {
        console.log('O Cachorro está comendo')
    }
};

const Cachorro = Object.create(Dog);
Cachorro.bark = function () {
    console.log('O cachorro está latindo')
}

Cachorro.bark()
Cachorro.eating();