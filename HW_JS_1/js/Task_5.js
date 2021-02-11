"use strict";

// Create a program that will ask the user his name and then display “Hello your name” in the alert. For input name use prompt function. If a user enters an empty name, the program will display “Invalid name” in the alert. Just spaces also are empty.


let userName = (prompt(`Введите Ваше имя`));

if (userName === ``) {
  alert(`Неверное имя`);
} else {
  alert(`Здравствуйте, ${userName} !`);
}