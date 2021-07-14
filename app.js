import pokemon from './data/pokemon.js';

const poke1Radio = document.getElementById('poke1-radio');
const poke1Image = document.getElementById('poke1-image');

const poke2Radio = document.getElementById('poke2-radio');
const poke2Image = document.getElementById('poke2-image');

const poke3Radio = document.getElementById('poke3-radio');
const poke3Image = document.getElementById('poke3-image');

const capturePokemon = document.getElementById('submit');



let totalPlays = 0;

// export function encounterPokemon(pokemon){
//     totalPlays++;

//     let randNum1 = Math.floor(Math.random() * pokemon.length);
//     let randNum2 = Math.floor(Math.random() * pokemon.length);
//     let randNum3 = Math.floor(Math.random() * pokemon.length);

//     while (randNum1 === randNum2 ||
//       randNum1 === randNum3 ||
//       randNum2 === randNum3) {
    //         randNum1 = Math.floor(Math.random() * pokemon.length);
    //         randNum2 = Math.floor(Math.random() * pokemon.length);
    //         randNum3 = Math.floor(Math.random() * pokemon.length);
    //     }    
    
    //     console.log(randNum1);
    //     console.log(pokemon[randNum1]);
    // let poke1 = pokemon[randNum1];
    // console.log(randNum2);
    // let poke2 = pokemon[randNum2];
    // console.log(randNum3);
    // let poke3 = pokemon[randNum3];


//     poke1Radio.value = poke1.pokemon;
//     console.log(poke1Radio.value);
//     poke1Radio.checked = false;
//     poke1Image.src = poke1.url_image;

//     poke2Radio.value = poke2.pokemon;
//     poke2Radio.checked = false;
//     poke2Image.src = poke2.url_image;

//     poke3Radio.value = poke3.pokemon;
//     poke3Radio.checked = false;
//     poke3Image.src = poke3.url_image;
// }

// encounterPokemon(pokemon);

// capturePokemon.addEventListener('click', () => {
    //     if (totalPlays < 2) {
        //         encounterPokemon();
//     } else {
    //         window.location.replace('./results.html');
//     }
// });

function getRandomNumber(){
    let randPokemon = Math.floor(Math.random() * pokemon.length);
    return pokemon[randPokemon];    
    
} 
    
    // repeat poke1 steps for poke2 & 3
    // apply while loop to ensure no two poke are the same

    


let poke1 = getRandomNumber(); 
console.log(poke1);
let poke2 = getRandomNumber();
console.log(poke2);
let poke3 = getRandomNumber();
console.log(poke3);

