// function myFunction (a, b) {
let a = 10;
let b = 2;
let dividingResult;
dividingResult = a / b;
const message = 'Результат ділення';
const errorMessage = 'а не можна поділити на b';
if (isNan(dividingResult)){
   console.log( message + ' - ' + dividingResult);
} else if (isNan(dividingResult)) {
    console.log(message + ' - ' + errorMessage);
}
}
// myFunction ();