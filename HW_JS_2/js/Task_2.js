"use strict";

// Create a program that will display all numbers between two entered numbers. 
// Example: first number - 4, second - 10 -> 4, 5, 6 ,7, 8, 9, 10; first - 24, second - 15 -> 15, 16, 17, 18, 19, 20, 21, 22, 23, 24;

let firstNum = +prompt();
let secondNum = +prompt();
if (firstNum > secondNum) {
    let temp = firstNum;
    firstNum = secondNum;
    secondNum = temp;
}
for (let i = firstNum; i <= secondNum; i++) {
    console.log(i)
}