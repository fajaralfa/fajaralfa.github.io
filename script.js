let navbar = document.getElementById('header')
let navTop = navbar.offsetTop

let sticky = function(){
  if(window.pageYOffset >= navTop){
    navbar.classList.add('navTop')
  }else{
    navbar.classList.remove('navTop')
  }
}

window.onscroll = function(){sticky()}
