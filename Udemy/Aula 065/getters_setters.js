class Carro {
  #velocidade = 0;
  constructor(nome) {
    this.nome = nome;
  }

  set velocidade(valor) {
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;
    this.#velocidade = valor;
  }

  get velocidade() {
    return this.#velocidade;
  }
  acelerar() {
    if (this.#velocidade >= 100) return;
    this.#velocidade++;
  }

  reduzir() {
    if (this.#velocidade <= 0) return;
    this.#velocidade--;
  }
}

const c1 = new Carro("Fusca");

for (let i = 0; i <= 200; i++) {
  c1.acelerar();
}
c1.velocidade = 59;
console.log(c1);

// -----------------------------

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  }

  set nomeCompleto(valor) {
    valor = valor.split(" ");
    this.nome = valor.shift();
    this.sobrenome = valor.join(" ");
  }
}

const p1 = new Pessoa("Luiz", "Miranda");
p1.nomeCompleto = "Mateus Brito";
console.log(p1.nomeCompleto);
