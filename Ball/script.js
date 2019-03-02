function GenerateAnswer()
{
    const responses = [
        'так, звичайно!',
        'забудьте про це!',
        'імовірність мала, але...',
        'безумовно!',
        'занадто рано.',
        'точно так!',
        'перспективи хороші.',
        'куля не знає.',
        'так.',
        'думаю, що ні.',
        'не можу сказати.',
        'ні.',
        'спитайте ще раз пізніше.',
        'є сумніви.',
        'не зараз.',
        'духи говорять "ні"!',
        'шансів мало.',
        'можливо.'
        ];
let choice = responses[Math.floor(Math.random()*responses.length)];
let name = nameBox.value;
document.getElementById("response").innerHTML = name + ', відповідь для Вас: ' + choice
}

