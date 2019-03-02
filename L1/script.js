// console.log('Hello World');

const PI = Math.PI;
let radius = 10;
let area;

const message = 'Площа круга';

const powRadius = Math.pow(radius, 2);

area = PI * radius * radius;

area = area.toFixed(2);

console.log( message + ' - ' + area); // комкатинація
