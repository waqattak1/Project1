word_array = ['apple', 'baker', 'charm', 'doubt', 'enjoy', 'fable', 'gloom', 'hurry', 'image', 'jolly', 'knead', 'lucky', 'melon', 'novel', 'olive', 'prize', 'quilt', 'route', 'shark', 
'tiger', 'umbra', 'vital', 'waste', 'xenon', 'yield', 'zebra', 'argon', 'beach', 'crisp', 'dance', 'elbow', 'flame', 'gauge', 'hinge', 'ivory', 'joust', 'knock', 'lunar', 'mango',
 'naval', 'orbit', 'proud', 'quiet', 'rider', 'scent', 'tulip', 'ulcer', 'voice', 'watch', 'xerox', 'yacht'];




// Cache all of the images in variables, and by default set their visibility to none
let manStatusImg = document.getElementById('man_image');
manStatusImg.style.display = 'none'



// Creating a start button variable 
const startButtonEl = document.querySelector('#Start_Game');

// Creating a game progress display variable
const inProgressEl = document.getElementById("progress");

// cache the guessdisplayelement 
displayNumGuessesRemaining = document.getElementById("guessDisplay");

// Adding an event listener that renders the game when the start button is clicked
startButtonEl.addEventListener('click', render);

// Create an empty array that will contain all of the user's guesses
// throughout the game 
userGuessArray = [];

//  This is the render function, in it a random word from the aforementioned array is selected
// Additionally, only the game in progress' div is made visible 
function render() {
    //  Set the progress element's inner html to 'in progress'
    inProgressEl.innerHTML = 'IN PROGRESS'

    // Generate a random index between 0 and the size of the word array 
    selectedIndex = Math.floor(Math.random()*word_array.length);
    console.log('target array index is: ', selectedIndex) 

    // Use the index generated above to select a word from the word array, 
    // and assign it to the variable 'targetGuess'
    targetGuess = word_array[selectedIndex];
    console.log('target guess is: ', targetGuess)

    // Split the terget guess string into an array of individual letters
    targetGuessArray = targetGuess.split("");
    console.log('targetGuessArray is: ', targetGuessArray)

    // Inititalize the number of guess the user has, set it equal
    // to the length of the target string
    numGuesses = targetGuessArray.length;
    console.log('User has ' + numGuesses + ' guesses remaining')

    displayNumGuessesRemaining.innerHTML = 5;
};


// ```````````````````````
guessesSoFar = []
displayUserGuesses = document.querySelector("#userGuesses");
displayGuessesRemaining = document.getElementById(guessesRemaining);


for (i=0; i<5; i++) {
    guessesSoFar.push("__")    
}
// ```````````````````````````

// displayUserGuesses.textContent = guessesSoFar.join(" ");

// Assign the 'submit' button to a variable here
// Log the user's submitted guess in a variable names 'userInput'
const submitBtn = document.querySelector("#Submit_guess");
const userInput = document.querySelector("#userGuess");


// Next we create an event listener to the 'submit' button for when the user submits a guess
// on-click, the game will begin and a function below will initate that checks the user's guesses




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

    console.log('user has input: ', inputVal)
    
    if (targetGuessArray.includes(inputVal)) {
    console.log('The user guessed a correct letter!')
    incorrectGuesses +=0;
    remainingGuesses = numGuesses-incorrectGuesses;
    indexOfCorrectGuess = targetGuessArray.indexOf(inputVal);
    console.log('The user has ' + remainingGuesses + " guesses remaining")
    console.log('userGuessArray is: ', userGuessArray)  

    } else {
         console.log("The user guesses an incorrect letter!")
        incorrectGuesses +=1;
        remainingGuesses = numGuesses-incorrectGuesses;
        console.log('remaining guesses: ' + remainingGuesses)
        console.log('userGuessArray is: ', userGuessArray)
        checkGuess(remainingGuesses)
        }

    if (remainingGuesses === 0) {
        inProgressEl.innerHTML = "YOU LOST :("
    }

    displayUserGuesses.textContent = userGuessArray;
    displayNumGuessesRemaining.innerHTML = remainingGuesses;
  
    }