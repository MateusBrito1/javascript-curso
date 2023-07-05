const pessoal = {
    nome: 'Mateus',
    sobrenome: 'Gabriel',
    idade: 22,

    fala() {
        console.log(`${this.nome} de  ${this.idade} anos está estudando programação`) // 'this' se referenceia ao objeto (pessoal), e tudo dentro dele será mostrado no this.
    }
}

pessoal.fala()