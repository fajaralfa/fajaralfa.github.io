let navbar = document.querySelector('#header')
let navTop = navbar.offsetTop
let linkIncrmnt = document.querySelector('.linkOnClick')
let parag = document.querySelector('.parag')

let canvas = document.querySelector('#canvas1')
let ctx = canvas.getContext('2d')
let x = canvas.width / 2
let y = canvas.height - 30
let dx = 1
let dy = -1

function drawBall(){
    ctx.beginPath()
    ctx.arc(x, y, 10, 0, Math.PI * 2)
    ctx.fillStyle = 'blue'
    ctx.fill()
    ctx.closePath()
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBall()

    if(dx + x > canvas.width - 10 || dx + x < 10) {
        dx = -dx
    }
    if(y + dy < 10){
        dy = -dy
    }
    else if(y + dy > canvas.height - 10){
        dy = -dy
    }

    x += dx
    y += dy
}

setInterval(draw, 10)

function sticky(){
  if(window.pageYOffset >= navTop){
    navbar.classList.add('navTop')
  }else{
    navbar.classList.remove('navTop')
  }
}

window.onscroll = sticky()

let i = 1
function kesini(){
  linkIncrmnt.innerText = `ini adalah link yang sudah kamu pencet ${i++} kali`
}

console.log(parag.innerText)
