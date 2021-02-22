"use strict";

// Find max number in array on even positions. Input data: none, just use variable with array. Output data: display the found number.

let arr = [4, 1, 3, 5, 2, 9, 8, 6];
let max = arr[0];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max && i % 2 === 0) {
        max = arr[i];
    }
}

console.log(max);