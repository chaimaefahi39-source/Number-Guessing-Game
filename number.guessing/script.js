let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');
const attemptsCount = document.getElementById('attemptsCount');
const historyList = document.getElementById('history');
const resetBtn = document.getElementById('resetBtn');

submitBtn.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);
    
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a number between 1 and 100!";
        message.style.color = "#e74c3c";
        return;
    }

    attempts++;
    attemptsCount.textContent = attempts;

    const li = document.createElement('li');
    li.textContent = `Guess ${attempts}: ${userGuess}`;
    historyList.prepend(li);

    if (userGuess === randomNumber) {
        message.textContent = "🎉 Congratulations! You guessed it!";
        message.style.color = "#27ae60";
        guessInput.classList.add('winner-input');
        endGame();
    } else if (userGuess > randomNumber) {
        message.textContent = "Too high! Try a smaller number. ⬇️";
        message.style.color = "#327fd1";
    } else {
        message.textContent = "Too low! Try a bigger number. ⬆️";
        message.style.color = "#327fd1";
    }

    guessInput.value = '';
    guessInput.focus();
});

function endGame() {
    submitBtn.disabled = true;
    guessInput.disabled = true;
    resetBtn.style.display = "inline-block";
}

resetBtn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsCount.textContent = attempts;
    message.textContent = "";
    historyList.innerHTML = "";
    guessInput.disabled = false;
    submitBtn.disabled = false;
    guessInput.classList.remove('winner-input');
    resetBtn.style.display = "none";
    guessInput.focus();
});