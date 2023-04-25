word_array = ['apple', 'baker', 'charm', 'doubt', 'enjoy', 'fable', 'gloom', 'hurry', 'image', 'jolly', 'knead', 'lucky', 'melon', 'novel', 'olive', 'prize', 'quilt', 'route', 'shark', 
'tiger', 'umbra', 'vital', 'waste', 'xenon', 'yield', 'zebra', 'argon', 'beach', 'crisp', 'dance', 'elbow', 'flame', 'gauge', 'hinge', 'ivory', 'joust', 'knock', 'lunar', 'mango',
 'naval', 'orbit', 'proud', 'quiet', 'rider', 'scent', 'tulip', 'ulcer', 'voice', 'watch', 'xerox', 'yacht'];


//  This is the render function, in it a random word from the aforementioned array is selected
// Additionally, only the game in progress' div is made visible 


// Creating a start button variable 
const startButtonEl = document.querySelector('#Start_Game');

// Creating a game progress display variable
const inProgressEl = document.getElementById("progress")

// Adding an event listener that renders the game when the start button is clicked
startButtonEl.addEventListener('click', render);

// Create an empty array that will contain all of the user's guesses
// throughout the game 
userGuessArray = [];

function render() {
    //  Set the progress element's inner html to 'in progress'
    inProgressEl.innerHTML = 'IN PROGRESS'

    // Generate a random index between 0 and the size of the word array 
    selectedIndex = Math.floor(Math.random()*word_array.length);
    console.log(selectedIndex) 

    // Use the index generated above to select a word from the word array, 
    // and assign it to the variable 'targetGuess'
    targetGuess = word_array[selectedIndex];
    console.log(targetGuess)

    // Split the terget guess string into an array of individual letters
    targetGuessArray = targetGuess.split("");
    console.log(targetGuessArray)

    // Inititalize the number of guess the user has, set it equal
    // to the length of the target string
    numGuesses = targetGuessArray.length;
    console.log('User has ' + numGuesses + ' guesses remaining')
};

arraySoFar = []
displayUserGuesses = document.querySelector("#userGuesses");

for (i=0; i<5; i++) {
    arraySoFar.push("__")    
}

displayUserGuesses.textContent = arraySoFar;

// Assign the 'submit' button to a variable here
// Log the user's submitted guess in a variable names 'userInput'
const submitBtn = document.querySelector("#Submit_guess");
const userInput = document.querySelector("#userGuess");


// Next we create an event listener to the 'submit' button for when the user submits a guess
// on-click, the game will begin and a function below will initate that checks the user's guesses

submitBtn.addEventListener("click", gameProgress)


let playerStatus;
let remainingGuesses;


function gameProgress() {
    // Check to see if the user's guess is included in the targetGuessArray
    // if so, the user's number of guesses remains the same. If not, subtract 
    // one from the number of guess the user has remaining. 

    const inputVal = userInput.value;
    console.log("User input: ", inputVal);
    userGuessArray.push(inputVal);
  
    // Clear the input field
    userInput.value = "";
    console.log(numGuesses, userGuessArray)

    // We also want to see if the user's guesses are equal to the target strings
    // To do so, we'll use JSON.stringify

 

    if (JSON.stringify(userGuessArray) === JSON.stringify(targetGuessArray)) {
        playerStatus = 'WIN'
        inProgressEl.innerHTML = "YOU WON!"
    } else {
        playerStatus = 'LOSS'
    }

    console.log(playerStatus)

    if (targetGuessArray.includes(inputVal)=== true) {
        indexOfCorrectGuess = targetGuessArray.indexOf(inputVal);        
        console.log("index of this letter is: ", indexOfCorrectGuess)
        arraySoFar[indexOfCorrectGuess] = inputVal;
    } else {
        remainingGuesses = numGuesses - userGuessArray.length;
        console.log("incorrect!")
        console.log("You have " +remainingGuesses+ " guesses remaining!")
    }

    if (remainingGuesses === 0 && JSON.stringify(userGuessArray) !== JSON.stringify(targetGuessArray)) {
        console.log()
        inProgressEl.innerHTML = "YOU LOST :("
    } 
    

}


