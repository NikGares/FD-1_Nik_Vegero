"use strict";

// Create a program that will remove from the array entered number. Display updated array.

let arr = [1, 4, 7, 3, 9, 0, 5, 5];
let newArr = [];
let deleteNum = 9;

for(let i = 0; i < arr.length; i++) {
  if (arr[i] !== deleteNum) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);