// <!-- findById with while loop, showPokeId that retrieves data from local function, randomNum generator in app.js -->
// import pokemon from "./data/pokemon";

export function findById(items, id){
    for (let item of items){
        if (item.id === id) {
            return item;
        }
    }
}



export function setPokedex(results){
    
    localStorage.setItem('RESULTS', JSON.stringify(results));
}

export function getPokedex(){
    let resultString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultString);
    return results;
}
export function incrementShown(id){
    const results = getPokedex();
    console.log(results);
    const poke = findById(results, id);
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
    setPokedex(results);
}