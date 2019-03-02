
const submit = document.getElementById('submit');

const radius = document.getElementById('radius');

submit.addEventListener("click", function () {

    if (radius.value === '') {
       radius .classList.add('error');
    console.log ('submit 1', radius.value);
    }
    console.log ('submit 2', radius.value);
    const PI = Math.PI;
let area;

const message = 'Площа круга';

const powRadius = Math.pow(radius, 2);

area = PI * powRadius;

area = area.toFixed(2); 

console.log( message + ' - ' + area);
});

/* 4 поля - три сторони трикутника і висота, додати чекбокс
перша формула - сторона і висота, друга - дві сторони
по замовчуванню - за формулою в завданні
A i H required
якшо чекбокс вибраний, рахуємо за ф-лою Герона -> all fields required

David flagmen 1, 1.3.3