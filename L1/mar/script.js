


const container = document.getElementById('container');
console.log(container);

const audio = document.getElementById('audio');

console.log(container);


const item = document.getElementsByClassName('item');

function moveImage() {
    let i = 1;

    setInterval(function() {
        item[i-1].style.flexBasis = '10%';
        item[i].style.flexBasis = '80%';
        i++;
    }, 3200); 
}
function runScreen() {
    audio.play();
    item[0].style.flexBasis = '80%';
    moveImage();
}


container.addEventListener('click', runScreen);

