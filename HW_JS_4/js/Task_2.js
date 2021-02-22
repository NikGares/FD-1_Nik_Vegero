"use strict";

// Create a program that will check if the array is mirrored. Input data: none, just use variable with array. Output data: display yes or no. Example: [1, 2, 3, 2, 1] -> yes.

let arr = [2, 3, 4, 1, 4, 3, 2];
let isMirred = true;

for(let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
        isMirred = false;
    }
}

if (isMirred === true) {
    console.log('yes');
} else {
    console.log('no');
}