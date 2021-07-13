// <!-- findById with while loop, showPokeId that retrieves data from local function, randomNum generator in app.js -->
// import pokemon from "./data/pokemon";

export function getPokedex(items, id){
    for (let item of items){
        if (item.id === id) {
            return item;
        }
    }
}



export function setPokedex(id){

    let resultString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultString);
   

    const poke = getPokedex(results, id);
    if (!poke){
        const newItem = {
            id: id,
            shown: 1,
            preferred: 0
        };
        results.push(newItem);
    } else {
        poke.shown++;
    }
    localStorage.setItem('RESULTS', JSON.stringify(results));
}
