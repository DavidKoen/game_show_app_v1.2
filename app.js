const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
let missed = 0;
let overlay = document.getElementById('overlay');
const phrases = ['hello', 'goodbye', 'lost', 'found', 'alive'];
const title= document.querySelector('.title');

// Starts the game.
startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Chooses the game word.
function getRandomPhraseAsArray(arr) {
     let arrayObject = arr[Math.floor(Math.random() * arr.length)];
     let randomPhrase = arrayObject;
     return randomPhrase.split('');
}


// Add letters to the display.
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        let ul = document.querySelector('#phrase ul');
        let li = document.createElement('LI');
        li.textContent = arr[i];
        if (li.textContent !== ' ') {
            li.className = 'letter';
        } 
       phraseToDisplay = ul.appendChild(li);
    }  return phraseToDisplay;
};

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// Check if the chosen button matches the game word letter.
function checkLetter(button) {
    let checkLetter = document.getElementsByClassName('letter');
    let match = null;
    for (let i = 0; i < checkLetter.length; i += 1) {
        if (button.textContent === checkLetter[i].textContent.toLowerCase()) {
            checkLetter[i].classList.add('show');
            match = button.textContent;
        }
    } return match
};

// Check the buttons the player selected.
qwerty.addEventListener('click', e=> {
    if (e.target.tagName == 'BUTTON') {
        e.target.className = 'chosen'
        let chosen = document.querySelectorAll('.chosen');
        chosen.disabled = true;
        let letterFound = checkLetter(e.target);
        if (letterFound === null) {
            let ol = document.querySelector('#scoreboard ol');
            let li = document.querySelector('#scoreboard li')
            let removeHeart = ol.removeChild(li);
            missed += 1;
        }
    } 
    checkWin(e.target);
    });

// Check if player won or lost.
 function checkWin() {
    let show = document.getElementsByClassName('show');
    let letter = document.getElementsByClassName('letter');
    if (show.length === letter.length) {
        overlay.classList.add('win');
        title.textContent = 'ongratulations! You won!';
        overlay.style.display = 'flex';
    } else if (missed >= 5) {
        overlay.classList.add('lose');
        title.textContent = 'Sorry, better luck next time.';
        overlay.style.display = 'flex';
    }
}