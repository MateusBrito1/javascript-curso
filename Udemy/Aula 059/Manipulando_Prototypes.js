// new Object -> Object.prototype
const objA = {
  chaveA: "A",
};

const objB = {
  chaveB: "B",
};

const objC = new Object();
objC.chaveC = "C";

Object.setPrototypeOf(objB, objA);

Object.setPrototypeOf(objC, objB);

console.log(objC.chaveB);

//O proto de C é o proto B o proto do objeto B é o objeto A, e o proto do objeto A é o prototype

function Pessoa(nome, idade) {
  this.nome = nome;

  this.idade = idade;
}

Pessoa.prototype.cargo = function (carg) {
  this.cargo = carg;
};

const pessoa1 = new Pessoa("Mateus", 22);
pessoa1.cargo("Programador");

const pessoa2 = {
  nome: "Juan",

  idade: 22,

  cargo: "Design",
};

Object.setPrototypeOf(pessoa2, Pessoa.prototype);

const p3 = Object.create(Pessoa.prototype , {
  nome: {
    value: 'Matt',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  idade: {
    value: '22',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  jogo: {
    value: 'Valorant',
    writable: true,
    enumerable: true,
    configurable: true,
  }
})


console.log(`Meu nome é: ${p3.nome}, tenho ${p3.idade} anos, e meu jogo preferido é ${p3.jogo}`)

