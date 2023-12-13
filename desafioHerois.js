class heroiAtaque {
    constructor (tipoHeroi, tipoAtaque) {
        this.tipoHeroi = tipoHeroi
        this.tipoAtaque = tipoAtaque
    }

    escrever (){
        console.log(`O ${this.tipoHeroi} atacou com ${this.tipoAtaque}`)
    }
}

let mago = new heroiAtaque("Mago", "Magia")
mago.escrever()

let guerreiro = new heroiAtaque("Guerreiro", "Espada")
guerreiro.escrever()

let monge = new heroiAtaque("Monje", "Artes Marciais")
monge.escrever()

let ninja = new heroiAtaque("Ninja", "Shuriken")
ninja.escrever()
