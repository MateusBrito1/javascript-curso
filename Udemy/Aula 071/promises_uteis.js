function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      return reject(new Error("Falha na requisição"));
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + " - Passei na promise");
      return;
    }, tempo);
  });
}

// Promise Race
const promises = [
  wait("Promise um", rand(1, 5)),
  wait("Promise dois", rand(1, 5)),
  wait("Promise tres", rand(1, 5)),
  wait("Promise quatro", rand(1, 5)),
];

Promise.race(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((erro) => {
    console.log(erro);
  });

// - - - - - - - - - - - - - -

// Promise all
const PPromises = [
  "Primeiro valor",
  wait("Promise um", 3000),
  wait("Promise dois", 500),
  wait(1000, 1000),
  "Outro valor",
];

Promise.all(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((erro) => {
    console.log(erro);
  });
// - - - - - - - - - - - - - - - -

function downloadPage() {
  const inCache = false;

  if (inCache) {
    return Promise.resolve("Página in cache");
  } else {
    return wait("Baixei a página", 3000);
  }
}

downloadPage()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log(e));
