let qwerty = document.querySelector('#qwerty'); // Keyboard rows.
let list = document.querySelector('#phrase'); // The game word.
let missed = 0; // Chances still to guess. 5 is game over.
let start = document.querySelector('.btn__reset'); // The start uop button.
let overlay = document.querySelector('#overlay'); // The start up screen.
const phrases = ['hello', 'bye', 'goodbye', 'morning', 'night']; // The word options.
let randomArray; // The game word.

// Start up game.
start.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Collect the game word.
function getRandomPhraseAsArray(arr) {
    randomArray = arr[Math.floor(Math.random() * phrases.length)];
    return randomArray;
};

// 
function addPhraseToDisplay(arr){
    for (let i = 0; i <= phrases.length; i += 1) {
        list
    }
}