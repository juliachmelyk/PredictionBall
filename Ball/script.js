function GenerateAnswer() {
    const allResult = [];
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

    const result = {
        name: nameBox.value,
        question: questionBox.value,
        answer: responses[Math.floor(Math.random() * responses.length)]
    }
    allResult.push(result);
    document.getElementById("response").innerHTML = result.name + ', відповідь для Вас: ' + result.answer;
    return allResult;
}





