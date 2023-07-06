const buttons = document.querySelectorAll('button')
const resultado = document.querySelector('#resultado')

const usuarioJugada = document.querySelector('#usuario-jugada')
const computadoraJugada = document.querySelector('#computadora-jugada')

let userScore = document.querySelector('#user-score')
let computerScore = document.querySelector('#computer-score')
userScore.textContent = 0
computerScore.textContent = 0

const opciones = ['piedra', 'papel', 'tijera']

buttons.forEach( button => {
    button.addEventListener('click', () => {
        juegoUser(button.id)
        juegoComputadora()

        jugar(juegoUser(button.id), juegoComputadora())
    })
})

let jugadaUser
function juegoUser(userChoice) {
    jugadaUser =  userChoice
    usuarioJugada.textContent = jugadaUser
    return jugadaUser
}

let jugadaPC
function juegoComputadora() {
    const posicion = Math.floor(Math.random()*opciones.length)
    jugadaPC = opciones[posicion]
    computadoraJugada.textContent = jugadaPC
    return jugadaPC
}

function jugar (jugadaUser, jugadaPC) {
    console.log('jugando....')
    console.log(jugadaUser)
    console.log(jugadaPC)
    if(jugadaUser == jugadaPC) {
        resultado.textContent = 'Es un empate!'
    } else if ((jugadaUser === 'papel' && jugadaPC === 'piedra') || 
        (jugadaUser === 'piedra' && jugadaPC === 'tijera') || 
        (jugadaUser === 'tijera' && jugadaPC === 'papel')) {
        resultado.textContent = 'Ganaste!! 😎'
        userScore.textContent++
    } else {
        resultado.textContent = 'Perdiste!! 😢'
        computerScore.textContent++
    }
}

