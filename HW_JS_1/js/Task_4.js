"use strict";

// Create a program “calculator”. Implement only 4 basic operations (+, -, /, *). For input data use a prompt function. First input -> 1 number. Second input -> type operation. Third input -> 2 number. Result should be displayed in the alert.

let a = Number(prompt(`Введите первое число`));
let typeOperation = (prompt(`Введит действие ('+', '-', '*', '/')`));
let b = Number(prompt(`Введите второе число`));

switch (typeOperation) {
  case '+':
    alert(a + b);
    break;
  case '-':
    alert(a + b);
    break;
  case '*':
    alert(a * b);
    break;
  case '/':
    alert(a / b);
    break;
  default:
    alert('Не правильно указано действие');
}