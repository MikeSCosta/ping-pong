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

canvasCtx.fillRect(10, 100, lineWidth, 200) // desenha raquete esquerda 

canvasCtx.fillRect(window.innerWidth - lineWidth - 10, 250, lineWidth, 200)  //desenha raquete direita

  //desenha bolinha
canvasCtx.beginPath()
canvasCtx.arc(480, 300, 20, 0, 2 * Math.PI, false)
canvasCtx.fill()

  //desenha placar
  canvasCtx.font = "bold 72px Arial"
  canvasCtx.textAlign = "center"
  canvasCtx.textBaseline = "top"
  canvasCtx.fillStyle = "#01341D"
  canvasCtx.fillText('3', window.innerWidth / 4, 50)
  canvasCtx.fillText('1', window.innerWidth / 4  + window.innerWidth / 2, 50)

}

setup()
draw()
