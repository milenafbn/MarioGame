const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth //tag canvas takes up the full width
canvas.height = innerHeight
//create a player with a class named player

const gravity = 0.5
class Player{
    constructor(){
        //propriedades do jogador. Aqui ele vai ser um quadrado
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30
        this.height = 30
    }

    //method draw: desenhando o personagem

    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(){
        this.draw()
        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        else this.velocity.y = 0
    }
}

const player = new Player()

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height) //limpa toda a tela
    player.update()
}
animate()