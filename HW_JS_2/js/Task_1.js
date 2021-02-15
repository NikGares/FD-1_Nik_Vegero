"use strict";

// Create a program that multiplies all the digits in a number. Use the prompt function to input number. Result should be displayed on the page. User can enter any number (21, 4371, 13232434 and etc). Please use only arithmetic operations.

let userNum = (+prompt(`Введите число`));
let result = 1;
while (userNum){
    let i = userNum % 10;
    result *= i;
    userNum = (userNum - i)/10; 
}
alert(`результат перемножения цифр в веддном числе = ${result}`)