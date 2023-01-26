const canvasE1 = document.querySelector("canvas")
const canvasCtx = canvasE1.getContext("2d")
const field = {
    w: window.innerWidth,
    h: window.innerHeight,
    draw: function () {//desenha campo
        canvasCtx.fillStyle = "#286047"
        canvasCtx.fillRect(0,0, window.innerWidth, window.innerHeight)
    },
}

function setup() {
    canvasE1.width = canvasCtx.width = field.w
    canvasE1.height = canvasCtx.height = field.h
}

function draw(){
    field.draw()
}

setup()
draw()
