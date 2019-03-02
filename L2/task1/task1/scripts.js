
const submit = document.getElementById('submit');
const radius = document.getElementById('radius');
const error = document.getElementById('error');
const result = document.getElementById('result');

submit.addEventListener("click", function () {

  console.log(radius.value);
  console.log(+radius.value === NaN);

  if (radius.value === '') {
    radius.classList.add('error');
    error.innerHTML = 'required';

  } else if (isNaN(+radius.value)) {
    radius.classList.add('error');
    error.innerHTML = 'value should be a number';

  } else {
    const PI = Math.PI;
    const message = 'Площа круга';
    const powRadius = Math.pow(radius.value, 2);
    const area = (PI * powRadius).toFixed(2);
    result.innerHTML = message + ' - ' + area
    console.log(message + ' - ' + area); // конкатенація
  }
});

radius.addEventListener("click", function () {
  radius.classList.remove('error');
  error.innerHTML = '';
});
