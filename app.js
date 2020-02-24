let qwerty = document.querySelector('#qwerty'); // Keyboard rows.
let list = document.querySelector('#phrase'); // The game word.
let missed = 0; // Chances still to guess. 5 is game over.
let start = document.querySelector('.btn__reset'); // The start up button.
let overlay = document.querySelector('#overlay'); // The start up screen.
const phrases = ['right', 'hello', 'floor', 'space', 'night']; // The word options.
const phraseArray = getRandomPhraseAsArray(phrases); // The game word.

// Start up game.
start.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Collect the game word.
function getRandomPhraseAsArray(arr) {
    let characters = arr[Math.floor(Math.random() * phrases.length)].split('');
    return characters;
};

// Add the game word to the display.
function addPhraseToDisplay(arr) {
    for (let i = 0; i <= phraseArray.length; i += 1) {
        let createList = document.createElement('LI');
        let addText = document.createTextNode(phraseArray[i]);
        createList.appendChild(addText);
        let individualLetters = document.querySelector('#phrase ul').appendChild(createList);
        individualLetters.className = 'letter';
        return individualLetters;
    }
}