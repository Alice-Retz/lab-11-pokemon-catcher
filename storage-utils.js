// <!-- findById with while loop, showPokeId that retrieves data from local function, randomNum generator in app.js -->

export function findById(items, id){
    for (let item of items){
        if (item.id === id) {
            return item;
        }
    }
}

export function getPoke(){

    let resultString = localStorage.getItem(RESULTS) || '[]';
    const results = JSON.parse(resultString);
    // return results;
}