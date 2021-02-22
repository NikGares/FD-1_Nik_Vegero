"use strict";

// Expand the numbers in an array first positive then negative. Input data: none, just use variable with array. Output data: display modified array. Example: [4, -5, 2,- 4, -2, 2, 1, 5] -> [4, 2, 2, 1, 5, -5, -4, -2].

let arr = [4, -1, -3, 6, 2, -9, 4, -8];
let positive = [];
let negative = [];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= 0) {
        positive.push(arr[i]);
    } else {
        negative.push(arr[i]);
    }
}

let result = [...positive, ...negative]

console.log(result);