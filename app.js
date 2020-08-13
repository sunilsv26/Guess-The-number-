const userInputEl = document.querySelector('.guessField');
userInputEl.focus();
let randomNumEl = Math.floor(Math.random()*100+1);
console.log(randomNumEl);
const prevGuessesEl = document.querySelector('.guesses');
const resultEl = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const btnEl = document.querySelector('.guessSubmit');

let count=0;



function setReset(){
    userInputEl.disabled = true;
    btnEl.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'New Game';
    document.body.append(resetButton);
    resetButton.addEventListener('click',gameReset);
    
}


function gameReset(){
    count = 0;
    resetButton.parentNode.removeChild(resetButton);
    userInputEl.disabled = false;
    btnEl.disabled = false;
    resultEl.textContent = '';
    prevGuessesEl.textContent = '';
    randomNumEl = Math.floor(Math.random()*100+1);
    resultEl.style.backgroundColor = 'white';
}

function renderResult(){
    count++;
    if(Number(userInputEl.value) == '' ||userInputEl.value > 99 || userInputEl.value < 1 ||isNaN(userInputEl.value)){
        return alert('Enter vaild number between 1 to 100')
    }
    if(Number(userInputEl.value) == randomNumEl){
        prevGuessesEl.textContent +=userInputEl.value  +  ' ';
        resultEl.textContent = 'Congrats!!,You were right';
        resultEl.style.backgroundColor = 'green';
        setReset();  
    }
    else if (Number(userInputEl.value) < randomNumEl){
        prevGuessesEl.textContent +=userInputEl.value +' ';
        resultEl.textContent = 'Wrong, too Low';
        resultEl.style.backgroundColor = 'red';
    }
    else if (Number(userInputEl.value) > randomNumEl){
        prevGuessesEl.textContent +=userInputEl.value +' ';
        resultEl.textContent = 'Wrong, too High';
        resultEl.style.backgroundColor = 'red';
    }
    console.log(count);
    userInputEl.value = '';
    userInputEl.focus();
    if(count == 10){
        setReset();
    }
}

btnEl.addEventListener('click',renderResult);