
//Animação de scroll suave nos links - creditos: https://github.com/origamid/publico/blob/main/scroll-suave-para-link-interno-javascript-puro/scroll-suave-final/js/app.js
const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 80;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};


var btnNext = document.querySelector('#next')
var btnPrevious = document.querySelector('#previous')

const balls = document.querySelectorAll('.apagado') 
const skillsG1 = document.querySelectorAll('.group1')
const skillsG2 = document.querySelectorAll('.group2')

var indexBalls = 0
var indexPage = 0


function removeShowClass(list, showClass){
    for(var i = 0; i < list.length; i++){
        list[i].classList.remove(showClass)
        
    }
}


function showNextIndex(){
    removeShowClass(skillsG1, 'show')
    removeShowClass(skillsG2, 'show')
    removeShowClass(balls, 'aceso')

    skillsG1[indexPage].classList.add('show')
    skillsG1[indexPage + 1].classList.add('show') 
    skillsG2[indexPage].classList.add('show')
    skillsG2[indexPage + 1].classList.add('show') 
    balls[indexBalls].classList.add('aceso')
}



btnNext.addEventListener('click', () =>{
    indexBalls++
    indexPage+=2
    
    if(indexBalls > balls.length - 1 || indexPage > skillsG1.length -2){
        indexBalls = 0
        indexPage = 0
    }

    showNextIndex()
})

btnPrevious.addEventListener('click', ()=>{
    indexBalls--
    indexPage-=2

    if(indexBalls < 0 || indexPage < 0){
        indexBalls = balls.length - 1
        indexPage = skillsG1.length -2
    }

    showNextIndex()
})

// Menu mobile

var icone = document.querySelector('#idIcone');
var mostrandoMenuMobile = false
var menuMobile = document.querySelector('#idMenuMobile')


setInterval(()=>{
    if(window.innerWidth > 1020){
        menuMobile.style.display = "none"
        mostrandoMenuMobile = false
    }
}, 1000)



icone.addEventListener('click', ()=>{
    
    if(mostrandoMenuMobile == false){
        menuMobile.style.display = "block"
        mostrandoMenuMobile = true
    }else{
        menuMobile.style.display = "none"
        mostrandoMenuMobile = false
    }

})