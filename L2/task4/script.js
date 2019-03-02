const submit = document.getElementById('submit');
const result = document.getElementById('result');
const punctMark = document.getElementById('punctMark');

submit.addEventListener("click", function () {
    const mark = punctMark.value;
    switch (mark) {
        case '\.': document.getElementById('result').innerHTML = "Крапка"; break;
        case '\,': document.getElementById('result').innerHTML = "Кома"; break;
        case '\?': document.getElementById('result').innerHTML = "Знак питання"; break;
        case '\!': document.getElementById('result').innerHTML = "Знак оклику"; break;
        case '\:': document.getElementById('result').innerHTML = "Двокрапка"; break;
        case '\;': document.getElementById('result').innerHTML = "Крапка з комою"; break;
        default: document.getElementById('result').innerHTML = "Це не розділовий знак"; break;
    }
});
