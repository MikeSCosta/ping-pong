const canvasE1 = document.querySelector("canvas")
const canvasCtx = canvasE1.getContext("2d")
gapX = 10

const field = {
    w: window.innerWidth,
    h: window.innerHeight,
    draw: function () {//desenha campo
        canvasCtx.fillStyle = "#286047" //cor que definimos para o elemento
        canvasCtx.fillRect(0,0, this.w, this.h) //figura do metodo canvas Rect é retangulo e suas propriedades são x, y, width e heigth
    }
}

const line = {// desenha linha central
    w: 15,
    h: field.h,
    draw: function() {
        canvasCtx.fillStyle = "#ffffff" 
        canvasCtx.fillRect(field.w / 2 - this.w / 2, 0, this.w, this.h) //desenha linha central
    }
}

const leftPaddle = {// desenha raquete esquerda
    x: gapX,
    y: 250,
    w: line.w,
    h: 150,
    draw: function() {
        canvasCtx.fillStyle = "#ffffff"
        canvasCtx.fillRect(this.x, this.y, this.w, this.h) 
    }
}

const rightPaddle = {// desenha raquete direita
    x: field.w - line.w - gapX,
    y: 250,
    w: line.w,
    h: 150,
    draw: function() {
        canvasCtx.fillStyle = "#ffffff"
        canvasCtx.fillRect(this.x, this.y, this.w, this.h)
    }
}

const score = {
    human: 0,
    computer: 0,
    draw: function() {//desenha placar
    canvasCtx.font = "bold 72px Arial"
    canvasCtx.textAlign = "center"
    canvasCtx.textBaseline = "top"
    canvasCtx.fillStyle = "#01341D"
    canvasCtx.fillText(this.human, field.w / 4, 50)
    canvasCtx.fillText(this.computer, field.w / 4  + field.w / 2, 50)
    }
}

const ball = {
    x: 300,
    y: 200,
    r: 20,
    draw: function() {//desenha bolinha
        canvasCtx.fillStyle = "#ffffff"
    canvasCtx.beginPath()
    canvasCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
    canvasCtx.fill()
     }
}

function setup() {
    canvasE1.width = canvasCtx.width = field.w
    canvasE1.height = canvasCtx.height = field.h
}

function draw(){
    field.draw()
    line.draw()
    leftPaddle.draw()
    rightPaddle.draw()
    score.draw()
    ball.draw()
}

setup()
draw()
