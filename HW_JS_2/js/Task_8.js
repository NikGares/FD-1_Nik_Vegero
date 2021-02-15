"use strict";

// The program generates a random integer from 0 to 10. The user must guess it in no more than 5 attempts.***

let randomNum = Math.random() * 10;
console.log(`рандомное число = ${Math.round(randomNum)}`);

let userNum = +prompt('Попробуйте угадать число от 0 до 10');

if (randomNum === (userNum)) {
    console.log('You Win');
} else {
    console.log('You Lose')
}