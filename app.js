import pokemon from './data/pokemon.js';
import { findById } from './storage-utils.js';

const poke1Radio = document.getElementById('poke1-radio');
const poke1Image = document.getElementById('poke1-image');

const poke2Radio = document.getElementById('poke2-radio');
const poke2Image = document.getElementById('poke2-image');

const poke3Radio = document.getElementById('poke3-radio');
const poke3Image = document.getElementById('poke3-image');

const capturePokemon = document.getElementById('submit');


let totalPlays = 0;


function getRandomNumber(){
    let randPokemon = Math.floor(Math.random() * pokemon.length);
    return pokemon[randPokemon];    
    
} 

function encounterPokemon(){
    let poke1 = getRandomNumber(); 
    console.log(poke1);
    let poke2 = getRandomNumber();
    console.log(poke2);
    let poke3 = getRandomNumber();
    console.log(poke3);

    while (poke1 === poke2 ||
              poke1 === poke3 ||
              poke2 === poke3) {
        poke1 = getRandomNumber();
        poke2 = getRandomNumber();
        poke3 = getRandomNumber();
    }    
    poke1Radio.value = poke1.id;
    console.log(poke1Radio.value);
    poke1Radio.checked = false;
    poke1Image.src = poke1.url_image;

    
    poke2Radio.value = poke2.id;
    poke2Radio.checked = false;
    poke2Image.src = poke2.url_image;
    
    poke3Radio.value = poke3.id;
    poke3Radio.checked = false;
    poke3Image.src = poke3.url_image;
}

encounterPokemon();


function timesCaught(){
    const preferred = document.querySelector('input[type=radio]:checked').value;
    // findById(preferred)  get pokedex, findById(selected pokemon), increment preferred, return to local storage
    console.log(preferred);
    capturePokemon.addEventListener('click', () => {
        totalPlays++;
    
        if (totalPlays < 2) {
            encounterPokemon();
        } else {
            window.location.replace('./results.html');
        }
    });
}


