"use strict";

// Create a program that will check your entered num. If num > 10 and num < 20 or num > -20 and num < -10 then add to this num +100 and display the result, else display “Invalid entered number”.

let userNum = Number(prompt(`Введите число`));

if ((userNum > 10 && userNum < 20) || (userNum > -20 && userNum < -10)) {
  alert(userNum + 100);
} else {
  alert(`Неверно введено число`);
}