const canvasE1 = document.querySelector("canvas")
const canvasCtx = canvasE1.getContext("2d")
const field = {
    w: window.innerWidth,
    h: window.innerHeight,
    draw: function () {//desenha campo
        canvasCtx.fillStyle = "#286047" //cor que definimos para o elemento
        canvasCtx.fillRect(0,0, window.innerWidth, window.innerHeight) //figura do metodo canvas Rect é retangulo e suas propriedades são x, y, width e heigth
    },
}

const lineWidth = 15 //variavel que desenha a linha

const x = window.innerWidth / 2 - lineWidth / 2
const y = 0
const w = lineWidth
const h = window.innerHeight

function setup() {
    canvasE1.width = canvasCtx.width = field.w
    canvasE1.height = canvasCtx.height = field.h
}

function draw(){
    field.draw()

canvasCtx.fillStyle = "#ffffff" // cor dos próximos elementos do canvas

canvasCtx.fillRect(x, y, w, h) //desenha linha central
}

setup()
draw()
