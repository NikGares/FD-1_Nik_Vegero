"use strict";

// In the array swap the min and max elements. Input data: none, just use variable with array. Output data: display modified array.

let arr = [4, 1, 3, 6, 2, 9, 4, 8];
let max = arr[0];
let min = arr[0];
let maxIndex = 0;
let minIndex = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i];
        maxIndex = i;
    }
}

for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
        min = arr[i];
        minIndex = i;
    }
}

console.log(max);
console.log(min);

arr[minIndex] = max;
arr[maxIndex] = min;

console.log(arr);