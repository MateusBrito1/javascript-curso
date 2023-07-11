class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  falar() {
    console.log(`${this.nomeCompleto()} está falando`);
  }
}

const p1 = new Pessoa("Mateus", "Brito");

// - - - - - - - -  Comparação - - - - - - - -

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando`);
};

const p2 = new Pessoa2("Luiz", "Otavio");
p2.falar();

// - - - - - - -  - - - - - Prática - - - - - -

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  estoque(quantidade) {
    let estoque = 10;
    if (quantidade <= estoque) {
      console.log(
        `${this.nome} tem no estoque e preço está ${this.preco} reais`
      );
    } else {
      console.log(`${this.nome} não tem no estoque. Espere o reestoque!`);
    }
  }
}

const produto1 = new Produto("Amaciante", 30);
produto1.estoque(12);
