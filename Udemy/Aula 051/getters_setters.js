/*class Jogo {
    constructor(game) {
        this._game = game;
    }

    get game () {
        return this._game
    }

    set game(novoGame) {
        this._game = novoGame
    }
}

const game = new Jogo('God of War')

console.log(game.game)

game.game = 'Spiderman'
console.log(game.game)*/

class Player {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if(typeof newName === 'string' && newName.length <= 10) {
            this._name = newName;
        } else {
            ('Nome pode apenas conter letras e ter no max 10 letras.')
        }
    }
}


const player = new Player('Joao')
console.log(player.name)

player.name = 'Maria'
console.log(player.name)







