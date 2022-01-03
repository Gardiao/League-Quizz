import { questions } from './questions.js'


/* HTML DOM */
const start = document.getElementById('start')
const image = document.querySelector('#mainImg')
const asking = document.querySelector('.question')
const choices = document.querySelectorAll('.answer')
const levelShow = document.getElementById('score')
const showDifficult = document.getElementById('showDifficult')
const block = document.querySelector('.blockClick')
/* ----------*/

/* Difficult */
const modes = [
    { modeName: 'easyMode', value: 5},
    { modeName: 'normalMode', value: 10},
    { modeName: 'hardMode', value: 15}
]
/* ----------*/

let ChoosenQuest = []
let choosenDifficult = 0
let mode = 0
let level = 0
let points = 0

function checkDifficult() {
    modes.forEach(item => {
        if(choosenDifficult.id == item.modeName) {
            return mode = item.value
        }
    })
}

start.addEventListener('click', () => {
    choosenDifficult = document.querySelector('.selected')
    document.querySelector('.Menu').style.transform = 'translateY(-200%)'
    document.querySelector('.quizzLayout').style.visibility = 'visible'
    document.querySelector('.scoring').style.transform = 'translateY(0)'
    document.querySelector('.quizzModel').style.transform = 'translateX(0)'
    checkDifficult()
    loadingQuizz(mode)
    loadScreen()
})



function loadingQuizz(mode) {
    if(choosenDifficult.id == 'normalMode') {
            showDifficult.innerHTML = 'Médio'
    } 
    else if(choosenDifficult.id == 'hardMode') {
            showDifficult.innerHTML = 'Difícil'
    }

    for(let i = 0; i < mode; i++){
        let RandomElement = Math.floor(Math.random() * (0 +  questions.length))
        ChoosenQuest.push(RandomElement)
    }

    ChoosenQuest = ChoosenQuest.filter((value, index, arr) => arr.indexOf(value) == index)
    
    if(ChoosenQuest.length < mode) {
        return loadingQuizz(mode)
    } else if(ChoosenQuest.length > mode){
        return ChoosenQuest = ChoosenQuest.slice(0, mode)     
    } 

 console.log(ChoosenQuest)
}


function loadScreen(){
    let possibilities = questions[ChoosenQuest[0]].alternatives.push(questions[ChoosenQuest[0]].answ)
    let mixAnswers = questions[ChoosenQuest[0]].alternatives.sort((a, b) => 0.5 - Math.random())
    image.src = questions[ChoosenQuest[0]].img
    asking.innerHTML = questions[ChoosenQuest[0]].quest
    levelShow.innerHTML = `${level}/${mode}`
    for(let i = 0; i < choices.length; i++){
        choices[i].innerHTML = mixAnswers[i]
    }
}

function checkout(){
    if(level >= mode){
        document.querySelector('.quizzLayout').style.display = 'none'
        document.querySelector('.endScreen').style.transform = 'translateX(0)'
        document.querySelector('.endScreen').style.visibility = 'visible'
        document.getElementById('finalScore').innerHTML = `${points}/${mode}`
    }
    if(points == mode){
        document.getElementById('result').src = 'Images/Victory.png'
    } else { 
        document.getElementById('result').src = 'Images/Defeat.jpg'
    }
}



choices.forEach(item => {
    item.addEventListener('click', () => {
        level++
        console.log(level)
        block.classList.add('activeBlock')
        setTimeout(() => block.classList.remove('activeBlock'), 1750)
        setTimeout(checkout, 1650)
            if(item.innerHTML == questions[ChoosenQuest[0]].answ){
                points++
                item.classList.add('rightAnswer')
                ChoosenQuest.shift()
                setTimeout(() => {item.classList.remove('rightAnswer')}, 1000)
                console.log('click')
                return setTimeout(loadScreen, 1500)
            }
            else {
                item.classList.add('wrongAnswer')
                ChoosenQuest.shift()
                setTimeout(() => {item.classList.remove('wrongAnswer')}, 1000)
                console.log('click')
                return setTimeout(loadScreen, 1500)
            }
    })
})


