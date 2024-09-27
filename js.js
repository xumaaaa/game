let randomNumber = Math.floor(Math.random() *100) +1
const guessInput = document.querySelector('#guessInput')
const submiBtn = document.querySelector('#submitBtn')
const result = document.querySelector('#result')


submiBtn.addEventListener('click', () => {
    const userGuess = Number (guessInput.value)

    if (!userGuess ||  userGuess < 1  || userGuess > 100) {
        result.innerText = ' Введите число от 1 до 100'
    } else if(userGuess === randomNumber){
         result.innerText = 'Поздаврляю! Вы угадали число!☠️☠️ '
         setTimeout(() =>{
             randomNumber = Math.floor(Math.random() *100) +1
             result.innerText = 'Загаданое число обновленно! Угадай снова'

         }, 300)
    } else if(userGuess < randomNumber){
        result.innerText = 'Больше📈'
    } else {
        result.innerText = 'Меньше📉'
    }
})