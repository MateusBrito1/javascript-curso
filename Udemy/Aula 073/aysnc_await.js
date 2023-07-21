function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("cai no erro");
        return;
      }

      resolve(msg.toLocaleUpperCase() + " - Passei na promise");
      return;
    }, tempo);
  });
}

async function execute() {
  try {
    const fase1 = await wait("Fase 1", rand());
    console.log(fase1);

    const fase2 = await wait("Fase 2", rand());
    console.log(fase2);

    const fase3 = await wait("Fase 3", rand());
    console.log(fase3);

    console.log("Terminamos na fase:", fase3);
  } catch (erro) {
    console.log(erro);
  }
}

execute();

/*Pending - promise pendente
FullFilled - promise resolvida
Reject - promise rejeitada*/

/*wait("Fase 1", rand())
  .then((valor) => {
    console.log(valor);
    return wait("Fase 2", rand());
  })
  .then((fase) => {
    console.log(fase);
    return wait("Fase 3", rand());
  })
  .then((fase) => {
    console.log(fase);
    return fase;
  })
  .then((fase) => {
    console.log('Terminamos na fase:', fase)
  })
  .catch((erro) => {
    console.log(erro);
  });*/
