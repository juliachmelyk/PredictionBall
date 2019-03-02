const age = 24;
let counter = 24;

function sumFunction (from=24, to=1000) { //es 6
    let sum = 0;
    if (counter % age === 0) {
        for (let counter = from; counter <= to; counter++) {
            // sum = sum +counter;
            sum += counter;
        }
    }
    return sum;
}
console.log(sumFunction(24, 1000));
