function createPeople(nome, sobrenome) {
  const peoplePrototype = {
    say() {
      console.log(`${this.nome} ${this.sobrenome} está falando`);
    },
    eat() {
      console.log(`${this.nome} ${this.sobrenome} está comendo`);
    },
    beber() {
      console.log(`${this.nome} ${this.sobrenome} está bebendo`);
    },
  };
  return Object.create(peoplePrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const people1 = createPeople("João", "Silva");
const people2 = createPeople("Mateus", "Silva");
people1.eat();
people2.eat();

// - -  - - - - - - - - - - - - - - - - - - - - - -

function createPeople(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const say = {
  say() {
    console.log(`${this.nome} ${this.sobrenome} está falando`);
  },
};

const eat = {
  eat() {
    console.log(`${this.nome} ${this.sobrenome} está comendo`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} ${this.sobrenome} está bebendo`);
  },
};

const pessoaPrototype = Object.assign({}, say, eat, beber);

const pessoa1 = createPeople("João", "Silva");
const pessoa2 = createPeople("Mateus", "Silva");
pessoa1.eat();
pessoa2.eat();
