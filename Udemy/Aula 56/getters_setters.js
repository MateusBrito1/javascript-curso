function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivat = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,

    get: function () {
      return estoquePrivat;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("Error");
      }
      estoquePrivat = valor;
    },
  });
}

const produto1 = new Produto("Camiseta", 20, 3);
console.log(produto1.estoque);
produto1.estoque = 500;
console.log(produto1.estoque);

// - - - - - - - - -- - - - - - -
function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace("coisa.", "");
      nome = valor;
    },
  };
}

const p1 = criaProduto("Camiseta");
p1.nome = "Qualquer coisa";
console.log(p1.nome);
