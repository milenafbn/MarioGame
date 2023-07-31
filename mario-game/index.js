const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth //tag canvas takes up the full width
canvas.height = innerHeight
//create a player with a class named player
class Player{
    constructor(){
        //propriedades do jogador. Aqui ele vai ser um quadrado
        this.position = {
            x: 100,
            y: 100
        }
        this.width = 30
        this.height = 30
    }

    //method draw: desenhando o personagem

    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const player = new Player()
player.draw()