import { getPokedex, findById } from '../storage-utils.js;';
import pokemon from '../data/pokemon.js';

const resultsList = document.getElementById('results-list');

const results = getPokedex();
let names = [];
let shown = [];
let preferred = [];

for (let item of results) {
    const pokemonData = findById(pokemon, item.id);
    names.push(pokemonData.name);
    shown.push(item.shown);
    preferred.push(item.preferred);

    //displaying the images
    const pokeImage = document.createElement('img');
    pokeImage.src = `../assets/${pokemon.image}`;

    //creating <p> tags to display the info
    const shownP = document.createElement('p');
    shownP.textContent = `Shown ${item.shown}`;

    const preferredP = document.createElement('p');
    preferredP.textContent = `preferred ${item.preferred}`;

    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');

    //Putting the info into the created div
    resultDiv.appendChild(pokeImage);
    resultDiv.appendChild(shownP);
    resultDiv.appendChild(preferredP);

    resultsList.appendChild(resultDiv);
}

