class GerarCpf {
  constructor(cpf) {
    this.cpf = cpf;
  }

  randomNumbers() {
    let cpf = "";
    for (let i = 0; i < 9; i++) {
      cpf += Math.floor(Math.random() * 10);
    }
    return cpf;
  }

  multiplicar(numero) {
    let digitos = numero.toString().split("").map(Number);
    let peso = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let resultado = 0;

    for (let i = 0; i < digitos.length; i++) {
      resultado += digitos[i] * peso[i];
    }

    resultado = 11 - (resultado % 11);
    if (resultado > 9) {
      resultado = 0;
    }

    return resultado;
  }
}

const cpf = new GerarCpf();
cpf.randomNumbers()
console.log(cpf)