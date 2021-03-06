
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
    skillsG1[indexPage].classList.add('show')
    skillsG1[indexPage + 1].classList.add('show') 
    skillsG2[indexPage].classList.add('show')
    skillsG2[indexPage + 1].classList.add('show') 
    balls[indexBalls].classList.add('aceso')
}



btnNext.addEventListener('click', () =>{
    if(indexBalls == balls.length - 1 || indexPage ==  skillsG1.length -2){
        indexBalls = 0
        indexPage = 0
    }else{
        indexBalls++
        indexPage+=2
    }

    removeShowClass(skillsG1, 'show')
    removeShowClass(skillsG2, 'show')
    removeShowClass(balls, 'aceso')

    showNextIndex()
})

btnPrevious.addEventListener('click', ()=>{
    if(indexBalls == 0 || indexPage == 0){
        indexBalls = balls.length - 1
        indexPage = skillsG1.length -2
    }else{
        indexBalls--
        indexPage-=2
    }

    removeShowClass(skillsG1, 'show')
    removeShowClass(skillsG2, 'show')
    removeShowClass(balls, 'aceso')

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