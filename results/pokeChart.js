import { getPokedex } from '../storage-utils.js';
import { mungeName, mungePreferred, mungeShown } from './results.js';


// //Let's make a chart!
const retrievePokedex = getPokedex();
const namesChart = mungeName(retrievePokedex);
const shownChart = mungeShown(retrievePokedex); 
const preferredChart = mungePreferred(retrievePokedex);

//This calls the canvas tag we placed on the other page
var ctx = document.getElementById('caught-chart');
console.log(ctx);

//this builds the actual chart
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: namesChart,
        datasets: [{
            label: '# of Times Shown',
            data: shownChart,
            backgroundColor: [
                '#ffd700'
            ],
            borderWidth: 1
        },
        {
            label: '# of Times Preferred',
            data: preferredChart,
            backgroundColor: [
                '#0000ff'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


