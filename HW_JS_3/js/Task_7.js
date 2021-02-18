"use strict";

// In the array find the max element and display it and its index.


let arr = [2, 4, 1, 8, 9, 5, 7, 6];
let maxElement = arr[0];
let maxPosition = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > maxElement) {
        maxElement = arr[i];
        maxPosition = i;
    }
}

console.log(`Максимальный элемент в массиве = ${maxElement}`);
console.log(`Позиция максимального элемента в массиве = ${maxPosition}`);