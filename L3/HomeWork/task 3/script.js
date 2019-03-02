// Написати функції minNumber() та maxNumber(), яка знаходить найменше та найбільше числа в масиві.

const numArray = [1, 2, 3, 4, 5];

function minNumber(){
return(Math.min(...numArray));
}
console.log('Найменше число' + '-' + minNumber());


function maxNumber(){
    return(Math.max(...numArray));
}
console.log('Найбільше число' + '-' + maxNumber());

