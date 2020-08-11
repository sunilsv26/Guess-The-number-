const userInputEl = document.querySelector('.guessField');
const randomNumEl = Math.floor(Math.random()*100+1);
console.log(randomNumEl);
const prevGuessesEl = document.querySelector('.guesses');
const resultEl = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const btnEl = document.querySelector('.guessSubmit');

function gameReset(){
    userInputEl.value = '';
    prevGuessesEl.textContent = '';
    resultEl.textContent = '';
    resultEl.style.backgroundColor = 'none';
    lowOrHi.remove('button');
}

function renderResult(){
    if(userInputEl.value == randomNumEl){
        prevGuessesEl.textContent +=userInputEl.value  +  ' ';
        resultEl.textContent = 'Congrats!!,You were right';
        resultEl.style.backgroundColor = 'green';
        lowOrHi.innerHTML = `<button> Reset </button>`;
        lowOrHi.addEventListener('click',gameReset)
        
    }
    else if (userInputEl.value < randomNumEl){
        prevGuessesEl.textContent +=userInputEl.value +' ';
        resultEl.textContent = 'Wrong, too Low';
        resultEl.style.backgroundColor = 'red';
    }
}

btnEl.addEventListener('click',renderResult)