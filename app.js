import pokes from './data/pokemon.js';
// import { findById, getPoke } from './storage-utils.js';


const poke1Radio = document.getElementById('poke1-radio');
const poke1Image = document.getElementById('poke1-image');
const poke2Radio = document.getElementById('poke2-radio');
const poke2Image = document.getElementById('poke2-image');
const poke3Radio = document.getElementById('poke3-radio');
const poke3Image = document.getElementById('poke3-image');
const pickButton = document.getElementById('submit');

let totalPlays = 0;
function renderRandomPoke(){
    totalPlays++;
    let randNum1 = Math.ceil(Math.random()) * pokes.length;
    let randNum2 = Math.ceil(Math.random()) * pokes.length;
    let randNum3 = Math.ceil(Math.random()) * pokes.length;

    while (randNum1 === randNum2 ||
      randNum1 === randNum3 ||
      randNum2 === randNum3) {
        let randNum1 = Math.ceil(Math.random()) * pokes.length;
        let randNum2 = Math.ceil(Math.random()) * pokes.length;
        let randNum3 = Math.ceil(Math.random()) * pokes.length;
        console.log('randNum1');
    }    
    let poke1 = pokes[randNum1];
    let poke2 = pokes[randNum2];
    let poke3 = pokes[randNum3];

    poke1Radio.value = poke1.id;
    poke1Radio.checked = false;
    poke1Image.src = `./assets/${poke1.image}`;
    
    poke2Radio.value = poke2.id;
    poke2Radio.checked = false;
    poke2Image.src = `./assets/${poke2.image}`;
    
    poke3Radio.value = poke3.id;
    poke3Radio.checked = false;
    poke3Image.src = `./assets/${poke3.image}`;
}

renderRandomPoke();

pickButton.addEventListener('click', () => {
    if (totalPlays < 2) {
        renderRandomPoke();
    } else {
        window.location.replace('./results.html');
    }
});