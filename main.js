const randomNumber = parseInt(Math.floor(Math.random() * 100 + 1));

console.log(randomNumber);

const submit = document.querySelector('#submt');
const input = document.querySelector('#guessValue');
const remainingGuesses = document.querySelector('.lastResult');
const gameOver = document.querySelector('.remainingGuess');
const msg = document.querySelector('.msg');
const score = document.querySelector('.score');

let chance = 0;
let numOfGuesses = 1;
let playGame = true;


if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        let inputValue = parseInt(input.value);
        if (inputValue < 1 || inputValue > 100 || isNaN(inputValue)) {
            msg.textContent = 'Invalid guess! It should be between 1 and 100.';
        } else {
            chance ++;
        if (inputValue === randomNumber) {
                msg.textContent = 'Congratulations! Your guess number is correct.';
                const scoreValue = 101 - chance;
                score.textContent = `Your score is: ${scoreValue}`;
            } else if (inputValue > randomNumber) {
                msg.textContent = 'The number you guess is greater than the answer.';
            } else if (inputValue < randomNumber) {
                msg.textContent = 'The number you guess is lesser than the answer.';
            }
        }

        // code to clear the input value 
        input.value = '';

        // code to update remaining guesses
        numOfGuesses ++;
        remainingGuesses.textContent = `${11 - numOfGuesses}`
        if (numOfGuesses === 11) {
            gameOver.textContent = `Game Over. Correct answer is ${randomNumber}`;
        }
    });
} 





// for end the game
const endGame = () => {
    
}


// for start a new game
const startGame = () => {

}

