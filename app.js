let qwerty = document.querySelector('#qwerty');
let phrase = document.querySelector('#phrase');
let missed = 0;
let start = document.querySelector('.btn__reset');
let overlay = document.querySelector('#overlay');

start.addEventListener('click', () => {
    overlay.style.display = 'none';
});