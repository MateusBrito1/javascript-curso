// Função construtora -> objetos
// Função fabrica -> objetos

//Construtora -> Pessoa (new)
//Começar o nome da função com letra maiuscula, referenciar os parametros com this, e ao declarar a variavel da função sempre usar 'New'

function Pessoa (nome, sobrenome) {
    //Atributos ou métodos privados
  const ID = 123456;
  const metodoInterno = () => {

  };

  //Atributos ou métodos públicos. Pode acessar fora da função
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome, this.sobrenome + ": Sou um método");
  };
}

const p1 = new Pessoa("Luiz", "Ótavio");
const p2 = new Pessoa("Mateus", "Gabriel");

p2.metodo();
