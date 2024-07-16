// Hoisting
const btnRock = document.getElementById('btn-rock')
const btnPaper = document.getElementById('btn-paper')
const btnScissor = document.getElementById('btn-scissor')
const titleUser = document.getElementById('title-user')
const turnCpu = document.getElementById('title-cpu')
const currentPlay = document.getElementById('current-play')
const resultUser = document.getElementById('result-user')
const resultCpu = document.getElementById('result-cpu')
let pointsUser = 0
let pointsCpu = 0

btnRock.addEventListener('click', userPlayRock)
btnPaper.addEventListener('click', userPlayPaper)
btnScissor.addEventListener('click', userPlayScissor)

function userPlayRock() {
  titleUser.textContent = 'Usuario eligió piedra'
  titleUser.classList.add('title-change')
  titleUser.classList.remove('title-user')
  let cpu = Math.round(getRandomNumber(1,3))  
  turnCpu.textContent = showCpu(cpu)
  currentPlay.textContent = chooseWinner(1,cpu)
  showMatch() 
  finalMatch() 
}

function userPlayPaper() {
  titleUser.textContent = 'Usuario eligió papel'
  titleUser.classList.add('title-change')
  titleUser.classList.remove('title-user')
  let cpu = Math.round(getRandomNumber(1,3))  
  turnCpu.textContent = showCpu(cpu) 
  currentPlay.textContent = chooseWinner(2,cpu)   
  showMatch()    
  finalMatch()
}

function userPlayScissor() {
  titleUser.textContent = 'Usuario eligió Tijera'
  titleUser.classList.add('title-change')
  titleUser.classList.remove('title-user')
  let cpu = Math.round(getRandomNumber(1,3))
  turnCpu.textContent = showCpu(cpu)  
  currentPlay.textContent = chooseWinner(3,cpu)     
  showMatch()
  finalMatch()
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function showCpu (turnCpu) {
  if(turnCpu === 1) {
    return 'Cpu jugó Piedra'
  } else if (turnCpu === 2) {
    return 'Cpu jugó Papel'
  } else {
    return 'Cpu jugó Tijera'
  }
}

function chooseWinner (user,cpu) {
  if (user === cpu) {
    return 'Empate'
  } else if (user === 1 && cpu === 3 
    || user === 2 && cpu === 1
    || user === 3 && cpu === 2 ) {
      pointsUser++
      return ' Usuario gana'
    } else {
      pointsCpu++
      return 'cpu gana'
    }
}

function showMatch () {
  resultCpu.textContent = 'Cpu: ' + pointsCpu
  resultUser.textContent = 'User: ' + pointsUser
}

function finalMatch () {
  if (pointsCpu === 3) {
    alert('CPU es la ganadora')
  } else if ( pointsUser === 3 ) {
    alert('Usuario es el ganador')
  }
}

// function showCpu2 (turnCpu) {
//   return turnCpu === 1 
//   ? 'Cpu jugó Piedra' 
//   : turnCpu === 2 
//   ? 'Cpu jugó Papel' 
//   : 'Cpu jugó Tijera'
// }


