"use strict";

// The program generates a random integer from 0 to 100. The user must guess it in no more than 10 attempts. After each unsuccessful attempt, more or less number entered by the user should be reported than what is intended. If in 10 attempts the number is not guessed, then output the hidden number. Input data: numbers. Output data: 1 -> success or unsuccess attempt. 2 -> if unsuccess, more or less than the generated number.


let random =  Math.floor(Math.random() * 100);
let isWin = false;

for (let i = 0; i < 10; i++){

    let num = +prompt();

    if (num === random){
        alert('You Win');
        isWin = true;
    break;
    }

    if (num < random){
        alert('more');
    } else if (num > random){
        alert('less');
    }
}

if (!isWin) {
    alert(random);
}