
const btnNext = document.querySelector('#next')
const btnPrevious = document.querySelector('#previous')
const balls = document.querySelectorAll('.apagado') 
const skillsG1 = document.querySelectorAll('.group1')
const skillsG2 = document.querySelectorAll('.group2')

var indexBalls = 0
var indexPage = 0


function removeShowClass(){
    for(var i = 0; i < skillsG1.length; i++){
        if(i < balls.length){
            balls[i].classList.remove('aceso')
        }
        skillsG1[i].classList.remove('show')
        skillsG2[i].classList.remove('show')
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

    removeShowClass()

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

    removeShowClass()

    showNextIndex()
})
