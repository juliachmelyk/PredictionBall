// Ввести з клавіатури 12 чисел. Вивести найменше число,
//  порядковий номер найбільшого числа, кількість парних 
// та кількість від’ємних чисел. Використати функції. 
// Числа ввести через кому. UI частина - поле для вводу та кнопка.
const submit = document.getElementById('submit');
const result = document.getElementById('result');
const numbers = document.getElementById('numbers');

submit.addEventListener("click", function allNumbers() {
    function minNumber() {
        let str = numbers.value.replace(/,/g, ''); 
        return (Math.min(...str));
    }
    console.log('Найменше число' + '-' + minNumber());

    function maxNumber() {
        let str = numbers.value.replace(/,/g, '');  
        let max = Math.max(...str);
        return (str.indexOf(max));
    }
    console.log('Порядковий номер найбільшого числа' + '-' + maxNumber());

function ff(){
let str = numbers.value.replace(/,/g, '');  
var count = 0;
for (var i = 0, len = str.length; i < len; i++) 
    if (str[i] % 2 == 0) 
        count++;
        console.log(count);}
    ff()

        // function tf(){
        
                    // var count = 0;
            // for (var i = 0, len = str.length; i < len; i++) 
            // if (Math.sign(str) === -1) 
            //         count++;
                    // console.log(str)
            // tf()

    //мінус може бути тільки після коми - рег вирази 

            
    let str = numbers.value.replace(/,/g, '');       
    console.log(str);

    щоб сприймало відємні числа
});



