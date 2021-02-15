"use strict";

// Create a program that will display the entered number in words in English or Russian. Program should takes two values. First figure and second language(ru, en).

let userNum = +prompt('введите цифру от 0 до 9');
let userLang = prompt('выберите язык: "ru" или "en"');
if (userLang === 'ru'){
    switch (userNum) {
        case 0:
            alert('ноль');
            break;
        
        case 1:
            alert('один');
            break;

        case 2:
            alert('два');
            break;

        case 3:
            alert('три');
            break;

        case 4:
            alert('четыре');
            break;

        case 5:
            alert('пять');
            break;

        case 6:
            alert('шесть');
            break;

        case 7:
            alert('семь');
            break;

        case 8:
            alert('восемь');
            break;

        case 9:
            alert('девять');
            break;
    }
} else {
    switch (userNum) {
        case 0:
            alert('zero');
            break;
        
        case 1:
            alert('one');
            break;

        case 2:
            alert('two');
            break;

        case 3:
            alert('three');
            break;

        case 4:
            alert('four');
            break;

        case 5:
            alert('five');
            break;

        case 6:
            alert('six');
            break;

        case 7:
            alert('seven');
            break;

        case 8:
            alert('weight');
            break;

        case 9:
            alert('nine');
            break;
    }
}
