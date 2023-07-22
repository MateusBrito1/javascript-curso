const resultado = document.querySelector(".resultado");

axios("pokemon.json").then((resposta) => carregaElementos(resposta.data))


function carregaElementos(json) {
  const table = document.createElement("table");

  const colors = {
    health: "red",
    attack: "yellow",
    defense: "#22c55e",
  };

  for (let pokemon of json.pokedex) {
    const tr = document.createElement("tr");

    for (let key in pokemon) {
      const td = document.createElement("td");
      td.innerHTML = pokemon[key];

      if (colors[key]) {
        td.style.color = colors[key];
      }

      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
  resultado.appendChild(table);
}
