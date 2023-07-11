/*const games = [
  { id: 33, nome: "league of legends" },
  { id: 45, nome: "Cod" },
  { id: 52, nome: "Valorant" },
  { id: 61, nome: "GTA" },
];

const newGames = {};
for (const game of games) {
  const { id } = game;
  newGames[id] = { ...games };
}

console.log(newGames)*/

/*const newGames = new Map();
for (const game of games) {
  const { id } = game;
  newGames.set(id, {...game});
}


newGames.delete(33)   //Deletar alguma chave do objeto.
console.log(newGames)


/*for(const game of newGames.values()) {
    console.log(game)
}*/

//for(const game of newGames.values())  Pegar Valores
//for(const game of newGames.keys())  Pegar Chaves

const produtos = [
  { id: 1, price: 100, nome: "league of legends" },
  { id: 2, price: 400, nome: "Cod" },
  { id: 3, price: 900, nome: "Valorant" },
  { id: 4, price: 1000, nome: "GTA" },
];

const newProdutos = new Map ();
for(let produto of produtos) {
    const {id} = produto;
    newProdutos.set(id, {...produto})
}

console.log(newProdutos)