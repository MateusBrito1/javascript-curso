class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }
  // Metodo de instância
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }
  //Metodo estático
  static soma(x, y) {
    return x + y
  }
}

const controle1 = new  ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.diminuirVolume()
console.log(controle1)

