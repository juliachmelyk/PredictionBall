const submit = document.getElementById('submit');
const error = document.getElementById('error');
const result = document.getElementById('result');
const myNumber = document.getElementById('myNumber');

function someFunc (){
    console.log(getElementById(myNumber).value);
}

submit.addEventListener("click", function () {
const arr =  myNumber.value;
if (arr[0] === arr[1]) {
    console.log('Числа рівні');
    const message = 'Числа рівні';
    result.innerHTML = message;
    console.log(message);
} else {
    const message2 = 'Числа не рівні';
    console.log('Числа не рівні');
    result.innerHTML = message2;
}
});
