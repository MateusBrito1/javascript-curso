
/*defineProperty - uma propriedade
defineProperties - várias propriedades.*/


function Produto(nome, preco, estoque) {

  Object.defineProperty(this, "estoque", {
    enumerable: true, //Mostra a chave
    value: estoque, //Valor da chave
    writable: false, //Controla se o valor pode ou não ser alterado.
    configurable: true //Configurável.
  });


  Object.defineProperties(this, {
    nome: {
      enumerable: true, 
      value: nome, 
      writable: true, 
      configurable: true, 
    },
    preco: {
      enumerable: true, 
      value: preco, 
      writable: true, 
      configurable: true,
    },
  });
}

const produto1 = new Produto("Camiseta", 20, 3);
produto1.estoque = 5000000;
console.log(produto1);


let client = {
    firstName: 'Mateus',
    lastName: 'Gabriel'
};

Object.defineProperty(client, 'fullname', {
    get: function () {
        return this.firstName + ' ' + this.lastName
    },
    set: function (value) {
        let parts = value.split(' ')
        this.firstName = parts[0]
        this.lastName = parts[1]
    },
    enumerable: true,
    configurable: true,
} )

client.fullname = 'Mariana iorio'

console.log(client.firstName)
console.log(client.lastName)
console.log(client.fullname)





