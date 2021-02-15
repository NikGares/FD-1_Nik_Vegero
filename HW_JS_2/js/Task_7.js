"use strict";

// Display as many elements of the Fibonacci series as specified by the user. For example, if the input received the number 6, then the output should contain the first six numbers of the Fibonacci series: 1 2 3 5 8 13.

let userNum = +prompt('Введите сколько элементов ряда Фибоначчи вы хоитте увидеть');
let a = 1;
let b = 2;
console.log(a);
console.log(b);
for(let i = 3; i <= userNum; i++) {
let temp = a;
a = b; 
b = temp + a; 
console.log(b);
}