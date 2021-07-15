import pokemon from './data/pokemon.js';
import { findById, getPokedex, incrementShown, setPokedex } from './storage-utils.js';

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
    let poke2 = getRandomNumber();
    let poke3 = getRandomNumber();

    while (poke1 === poke2 ||
              poke1 === poke3 ||
              poke2 === poke3) {
        poke1 = getRandomNumber();
        poke2 = getRandomNumber();
        poke3 = getRandomNumber();
    }    
    poke1Radio.value = poke1.id;
    //console.log(poke1Radio.value);
    poke1Radio.checked = false;
    poke1Image.src = poke1.url_image;
    console.log(poke1);
    incrementShown(poke1.id);

    
    poke2Radio.value = poke2.id;
    poke2Radio.checked = false;
    poke2Image.src = poke2.url_image;
    incrementShown(poke2.id);
    
    poke3Radio.value = poke3.id;
    poke3Radio.checked = false;
    poke3Image.src = poke3.url_image;
    incrementShown(poke3.id);

}
// encounter pokemon should increment number of times pokemon appears
// capture pokemon should increment the times a pokemon has been selected
// get/set are ok

encounterPokemon();


function timesCaught(){
    const results = getPokedex();
    let selected = document.querySelector('input[type="radio"]:checked');
    console.log(typeof(selected.value));
    console.log(results);
    const caughtPokemon = findById(results, Number(selected.value));
    caughtPokemon.preferred++;
    setPokedex(results);
}
capturePokemon.addEventListener('click', () => {
    totalPlays++;
    
    timesCaught();
    if (totalPlays < 10) {
        encounterPokemon();
    } else {
        window.location.replace('./results/index.html');
    }
    
});

// findById(preferred)  get pokedex, findById(selected pokemon), increment preferred, return to local storage