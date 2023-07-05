//Factory Function (Função Fábrica)

//Constructor function (Função construtora)

function criarPessoa(nome, sobrenome, p, a) {
  return {
    nome,
    sobrenome,

    //get
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala(assunto) {
      return `${assunto}`;
    },

    altura: a,
    peso: p,

    // Get - Getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criarPessoa("Mariana", "Petrovich", 80, 1.6);
p1.nomeCompleto = "Mateus Gabriel de Melo brito";
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala("Bem-vindo"));
console.log("Seu imc é de:", p1.imc);
