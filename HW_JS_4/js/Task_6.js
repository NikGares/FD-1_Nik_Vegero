"use strict";

// The number most often found in an array. Input data: none, just use variable with array. Output data: display number. Example: [4, 2, 2, 4, 6, 1, 0, 4] -> 4.

let arr = [2, 3, 1, 8, 2, 5, 9, 5, 7, 7, 9, 0, 1, 5];
let tempArr = [];

for (let i = 0; i < arr.length; i++){
    if (tempArr[arr[i]]) {
        tempArr[arr[i]]++;
    } else {
        tempArr[arr[i]] = 1;
    }
}

let max = tempArr[0];

for(let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] > max || max === undefined) {
        max = tempArr[i];
        maxIndex = i;
    }
}

console.log(maxIndex);