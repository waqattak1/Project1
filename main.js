word_array = ['apple', 'baker', 'charm', 'doubt', 'enjoy', 'fable', 'gloom', 'hurry', 'image', 'jolly', 'knead', 'lucky', 'melon', 'novel', 'olive', 'prize', 'quilt', 'route', 'shark', 
'tiger', 'umbra', 'vital', 'waste', 'xenon', 'yield', 'zebra', 'argon', 'beach', 'crisp', 'dance', 'elbow', 'flame', 'gauge', 'hinge', 'ivory', 'joust', 'knock', 'lunar', 'mango',
 'naval', 'orbit', 'proud', 'quiet', 'rider', 'scent', 'tulip', 'ulcer', 'voice', 'watch', 'xerox', 'yacht'];


let manStatusImg = document.getElementById('man_image');
manStatusImg.style.display = 'none';
let correctGuessEl = document.getElementById('correctGuesses');
const startButtonEl = document.querySelector('#Start_Game');
const inProgressEl = document.getElementById("progress");
displayNumGuessesRemaining = document.getElementById("guessDisplay");
startButtonEl.addEventListener('click', render);
userGuessArray = [];

function render() {
    inProgressEl.innerHTML = 'IN PROGRESS'
    selectedIndex = Math.floor(Math.random()*word_array.length);
    targetGuess = word_array[selectedIndex];
    targetGuessArray = targetGuess.split("");
    numGuesses = targetGuessArray.length;
    displayNumGuessesRemaining.innerHTML = 5;
};

displayUserGuesses = document.querySelector("#userGuesses");
displayGuessesRemaining = document.getElementById(guessesRemaining);
const submitBtn = document.querySelector("#Submit_guess");
const userInput = document.querySelector("#userGuess");
let playerStatus;
let remainingGuesses;
let incorrectGuesses = 0;
function checkGuess(remainingGuesses) {
        
    if (remainingGuesses === 4) {
        manStatusImg.src = 'images/4.png'
        manStatusImg.style.display = 'block'
    } else if (remainingGuesses === 3) {
        manStatusImg.src = 'images/3.png'
        manStatusImg.style.display = 'block'
    } else if (remainingGuesses === 2) {
        manStatusImg.src = 'images/2.png'
        manStatusImg.style.display = 'block'
    } else if (remainingGuesses === 1) {
        manStatusImg.src = 'images/1.png'
        manStatusImg.style.display = 'block'
    } else if (remainingGuesses === 0) {
        manStatusImg.src = 'images/0.png'
        manStatusImg.style.display = 'block'
        
    }
}

submitBtn.addEventListener("click", gameProgress)
function gameProgress() {

    let inputVal = userInput.value;
    console.log("User input: ", inputVal);
    userGuessArray.push(inputVal);
    userInput.value = "";
    
    if (targetGuessArray.includes(inputVal)) {
    incorrectGuesses +=0;
    remainingGuesses = numGuesses-incorrectGuesses;
    indexOfCorrectGuess = targetGuessArray.indexOf(inputVal);
    } else {
        incorrectGuesses +=1;
        remainingGuesses = numGuesses-incorrectGuesses;
        checkGuess(remainingGuesses)
        }
    if (targetGuessArray.every(element => userGuessArray.includes(element))) {
        inProgressEl.innerHTML = "YOU WON!";
        inProgressEl.style.backgroundColor = 'green';
        correctGuessEl.innerHTML = targetGuess;
        playAgainButtonEl.style.display = 'block';
    }

    if (remainingGuesses === 0) {
        inProgressEl.innerHTML = "YOU LOST :(";
        inProgressEl.style.backgroundColor = 'red';
        correctGuessEl.innerHTML = targetGuess;
        playAgainButtonEl.style.display = 'block';
    }

    displayUserGuesses.textContent = userGuessArray;
    displayNumGuessesRemaining.innerHTML = remainingGuesses;

    }

const playAgainButtonEl = document.querySelector('#Play_Again');
playAgainButtonEl.addEventListener('click', resetGame);

function resetGame() {
    inProgressEl.innerHTML = "";
    inProgressEl.style.backgroundColor = "";
    correctGuessEl.innerHTML = "";
    displayUserGuesses.textContent = "";
    manStatusImg.style.display = 'none';
    userGuessArray = [];
    incorrectGuesses = 0;
    render();
    playAgainButtonEl.style.display = 'none';
}