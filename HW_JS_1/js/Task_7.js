"use strict";

// *Create a program that multiplies all the digits in a number. Use the prompt function to input number. Result should be displayed on the page.*


function result(num) {
    numString = num.toString();
    let sum = 1;
    for (var i = 0; i < numString.length; i++) {
      sum = sum * numString[i];
    }
    document.getElementById("result").innerHTML = sum;
  };
  result(prompt(`Введите число`));