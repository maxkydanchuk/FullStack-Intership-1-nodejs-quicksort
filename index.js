const data = require('./prize.json');
const quicksort = require('./quicksort');

const result = quicksort(data.prizes, 'year');
console.log(result);

const userMessage = (func, message) => {
    if (func) {
        console.log(message);
    }
}
userMessage(result, 'Sort is in progress')