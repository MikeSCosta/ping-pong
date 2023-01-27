const canvasElement = document.querySelector("canvas")
const canvasContext = canvasElement.getContext("2d")
gapX = 10

const mouse = {
    x: 0,
    y: 0
}

const field = {
    w: window.innerWidth,
    h: window.innerHeight,
    draw: function () {//desenha campo
        canvasContext.fillStyle = "#286047" //cor que definimos para o elemento
        canvasContext.fillRect(0, 0, this.w, this.h) //figura do metodo canvas Rect é retangulo e suas propriedades são x, y, width e heigth
    }
}

const line = {// desenha linha central
    w: 15,
    h: field.h,
    draw: function () {
        canvasContext.fillStyle = "#ffffff"
        canvasContext.fillRect(field.w / 2 - this.w / 2, 0, this.w, this.h) //desenha linha central
    }
}

const leftPaddle = {// desenha raquete esquerda
    x: gapX,
    y: 250,
    w: line.w,
    h: 150,
    _move: function (){
        this.y = mouse.y - this.h / 2
    },
    draw: function () {
        canvasContext.fillStyle = "#ffffff"
        canvasContext.fillRect(this.x, this.y, this.w, this.h)

        this._move()
    }
}

const rightPaddle = {// desenha raquete direita
    x: field.w - line.w - gapX,
    y: 250,
    w: line.w,
    h: 150,
    _move: function (){
        this.y = ball.y 
    },
    draw: function () {
        canvasContext.fillStyle = "#ffffff"
        canvasContext.fillRect(this.x, this.y, this.w, this.h)

        this._move()
    }
}

const score = {
    human: 0,
    computer: 0,
    draw: function () {//desenha placar
        canvasContext.font = "bold 72px Arial"
        canvasContext.textAlign = "center"
        canvasContext.textBaseline = "top"
        canvasContext.fillStyle = "#01341D"
        canvasContext.fillText(this.human, field.w / 4, 50)
        canvasContext.fillText(this.computer, field.w / 4 + field.w / 2, 50)
    }
}

const ball = {
    x: 300,
    y: 200,
    r: 20,
    speed: 10,
    _move: function () {//movimenta a bolinha
        this.x += 1 * this.speed
        this.y += 1 * this.speed
    },
    draw: function () {//desenha bolinha
        canvasContext.fillStyle = "#ffffff"
        canvasContext.beginPath()
        canvasContext.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
        canvasContext.fill()

        this._move()
    }
}

function setup() {
    canvasElement.width = canvasContext.width = field.w
    canvasElement.height = canvasContext.height = field.h
}

function draw() {
    field.draw()
    line.draw()
    leftPaddle.draw()
    rightPaddle.draw()
    score.draw()
    ball.draw()
}

setup()
draw()

//suavização da bolinha
window.animateFrame = (function () {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            return window.setInterval(callback, 1000 / 60)
        }
    )
})()

function main() {
    animateFrame(main)
    draw()
}

setup()
main()

canvasElement.addEventListener('mousemove', function (e) {
    mouse.x = e.pageX
    mouse.y = e.pageY
})