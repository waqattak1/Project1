# H1: Game Title 

## Game Start
### User will be prompted to start the game with a 'start' button
### After clicking 'start', the game will render in the broswer 
### The render function will be written here

## Board Rendering
### When the game renders, the following info will be initialized: 
### Target guess (the word the user needs to guess), the user's score (how many guesses they have left, 5 or 6 to start), 
### and the game status div indicating the game is in progress will become visible 
### All of these pieces of info will be placed into an object {}

## Gameplay
### The algorithm will randomly select a word that the user needs to guess from an array of fifty 5 or 6-letter words
###  The Math.random function will be implemented here and the randomly selected string will be assigned to a variable here
### Next, a for loop will be implemented whwre with each lteration of the loop, the number of loops will equal the number of guesses the player has
### The player will be prompted for their guess, which they will have to type into the 'guess' div
### After typing their guess, the user will hit the 'submit' button and on-click the submit button will initiate the 
### scoring algorithm
### After the user submits their guess, the algorithm will check to see if the target guess (a string) contains the guessed letter string 
### that the user has submitted as their guess. If true, the string will fill in the positions of the div where the target guess is located. 
### If false, 1 will be subtracted from the total number of guesses the user has left and the div will be left blank 

## Game Scoring
## If the user exhausts their guesses, the game will end and the div containing the inner html text 'You Lost!' will become visible 
## If the user wins, the game will end and the div containing the inner html text "You won!' will become visible 

## Wireframe
![game_wireframe_snap](https://user-images.githubusercontent.com/130386022/234037906-9528901b-d084-4ca6-a949-be20fffaabc1.JPG)


