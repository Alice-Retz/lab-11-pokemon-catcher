import { setPokedex, getPokedex } from '../storage-utils.js';
// import { encounterPokemon } from '../app.js';
import pokemon from '../data/pokemon.js';

const test = QUnit.test;

test('setPokedex should create results object if pokemon not previously shown', (expect) => {
    localStorage.removeItem('RESULTS');
    const fakeResult = {
        id: 1,
        shown: 1,
        preferred: 0
    };

    setPokedex(1);

    const resultsString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultsString);

    expect.deepEqual(results[0], fakeResult);
});

test('setPokedex should increment object', (expect) => {
    localStorage.removeItem('RESULTS');
    const fakeResult = [{
        id: 1,
        shown: 1,
        preferred: 0
    }];
    localStorage.setItem('RESULTS', JSON.stringify(fakeResult));

    setPokedex(1);

    const resultsString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultsString);

    const expected = {
        id: 1,
        shown: 2,
        preferred: 0
    };
    expect.deepEqual(results[0], expected);
});

test('getPokedex should ', expect => {
    const expected = {
        '_id':'5cef3501ef6005a77cd4fd17',
        'pokemon':'bulbasaur',
        'id':1,
        'species_id':1,
        'height':7,
        'weight':69,
        'base_experience':64,
        'type_1':'grass',
        'type_2':'poison',
        'attack':49,
        'defense':49,
        'hp':45,
        'special_attack':65,
        'special_defense':65,
        'speed':45,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'bulbasaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    };
    const actual = getPokedex(pokemon, 1);
    expect.deepEqual(actual, expected);
});

// test('encounterPokemon should display the pokemon whose id correlates with the random number generated', expect =>{
//     const num = [{
//         '_id':'5cef3501ef6005a77cd4fd17',
//         'pokemon':'bulbasaur',
//         'id':1,
//         'species_id':1,
//         'height':7,
//         'weight':69,
//         'base_experience':64,
//         'type_1':'grass',
//         'type_2':'poison',
//         'attack':49,
//         'defense':49,
//         'hp':45,
//         'special_attack':65,
//         'special_defense':65,
//         'speed':45,
//         'ability_1':'overgrow',
//         'ability_2':'NA',
//         'ability_hidden':'chlorophyll',
//         'color_1':'#78C850',
//         'color_2':'#A040A0',
//         'color_f':'#81A763',
//         'egg_group_1':'monster',
//         'egg_group_2':'plant',
//         'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
//         'generation_id':1,
//         'evolves_from_species_id':'NA',
//         'evolution_chain_id':1,
//         'shape_id':8,
//         'shape':'quadruped',
//         'pokebase':'bulbasaur',
//         'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
//     }];
//     const expected = `<label>
//     <input id="poke1-radio" name="pokemon" type="radio" value="charmander">
//     <img id="poke1-image" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png">
//     </label>`;
//     const actual = encounterPokemon(num);
//     expect.equal(actual, expected);
// });
