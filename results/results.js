import { getPokedex, findById } from '../storage-utils.js';
import pokemon from '../data/pokemon.js';

const resultsList = document.getElementById('results-list');

const results = getPokedex();
let names = [];
let shown = [];
let preferred = [];

for (let item of results) {
    const pokemonData = findById(pokemon, item.id);
    names.push(pokemonData.pokemon);
    shown.push(item.shown);
    preferred.push(item.preferred);

    //display the names
    const pokeName = document.createElement('h4');
    pokeName.textContent = `${pokemonData.pokemon}`;
    //displaying the images
    const pokeImage = document.createElement('img');
    pokeImage.src = pokemonData.url_image;

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



// Let's munge some mons!
export function mungeShown(pokemonArray) {
    let shownResults = [];
    for (let pokemon of pokemonArray) {
        shownResults.push(pokemon.shown);
    }
    return shownResults;
}

export function mungeName(pokemonArray) {
    let nameResults = [];
    for (let pokemon of pokemonArray) {
        nameResults.push(pokemon.name);
    }
    return nameResults;
}

export function mungePreferred(pokemonArray) {
    let preferredResults = [];
    for (let pokemon of pokemonArray) {
        preferredResults.push(pokemon.preferred);
    }
    return preferredResults;
}






// // //Let's make a chart!
// const retrievePokedex = getPokedex();
// const namesChart = mungeName(retrievePokedex);
// const shownChart = mungeShown(retrievePokedex); 
// const preferredChart = mungePreferred(retrievePokedex);

// //This calls the canvas tag we placed on the other page
// var ctx = document.getElementById('caught-chart');
// console.log(ctx);

// //this builds the actual chart
// new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: namesChart,
//         datasets: [{
//             label: '# of Times Shown',
//             data: shownChart,
//             backgroundColor: [
//                 '#ffd700'
//             ],
//             borderWidth: 1
//         },
//         {
//             label: '# of Times Preferred',
//             data: preferredChart,
//             backgroundColor: [
//                 '#0000ff'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         responsive: false,
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });


