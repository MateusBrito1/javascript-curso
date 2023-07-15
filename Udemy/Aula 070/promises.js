/* function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

espera("Frase 1", aleatorio(1, 3))
.then((resposta) => {
  console.log(resposta);
  return espera("Frase 2", aleatorio(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return espera("Frase 3", aleatorio(1, 3))
    .then((resposta) => {
      console.log(resposta);
      return espera("Fim da contagen", aleatorio(1, 3))
      .then((resposta) => {
        console.log(resposta);
      });
    });
  });
});  */

/*function fazerReq() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dados = { id: 1, nome: "Pokedex" };

      resolve(dados);

      reject(new Error("Falha na requisição"));
    }, 2000);
  });
}*/

function priOp() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Pegando números para calcúlo')
      
      resolve(1);
    }, 1000);
  })
}

function segOp(resultado) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calculando segundo e primeiro número')

      resolve(resultado + 2)

      reject(new Error('Falha na autenticação'))
    }, 1000);
  });
}


function terOp(resultado) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log('Calculando terceiro e último número')

      resolve(resultado * 8)

      reject(new Error('Falha na autenticação'))
    }, 1000);
  })
}


priOp()
.then(segOp)
.then(terOp)
.then((resultadoFinal) => {
  console.log('Calculo final:', resultadoFinal);
})
.catch((erro) => {
  console.log('Ocorreu um erro nos calcúlos:', erro.message)
})


/*fazerReq()
  .then((dados) => {
    console.log("Requisição bem-sucedida");
    console.log("Dados:", dados);
  })

  .catch((error) => {
    console.log("Erro de requisição:", error.message);
  });*/
