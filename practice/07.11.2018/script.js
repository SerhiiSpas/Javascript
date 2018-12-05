'use strict';

var question = prompt('Какую из операций вы желаете выполнить (add "+", subtract "-", divide "/", multiply "*"','+');

var a = prompt("Введите первое число", "");
var b = prompt("Введите второе число", "");

var add = Number(a) + Number(b);
var subtract = Number(a) - Number(b);
var divide = Number(a) / Number(b);
var multiply = Number(a) * Number(b);

    switch (question) {
        case '+':
            alert(add);
            break;
        case '-':
            alert(subtract);
            break;
        case '/' :
            alert(divide);
            break;
        case '*':
            alert(multiply);
            break;
    }
