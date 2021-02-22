"use strict";

// Find the sum of elements between the minimum and maximum elements of an array. Input data: none, just use variable with array. Output data: display sum of elements.

let arr = [4, 9, 3, 6, 2, 1, 4, 8];
let maxNum = arr[0];
let minNum = arr[0];
let indexMaxNum = 0;
let indexMinNum = 0;
let summIndex = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > maxNum) {
        maxNum = arr[i];
        indexMaxNum = i;
    } else if(arr[i] < minNum) {
        minNum = arr[i];
        indexMinNum = i;
    }
}

if (indexMinNum > indexMaxNum) {
    indexMinNum += indexMaxNum;
    indexMaxNum = indexMinNum - indexMaxNum;
    indexMinNum = indexMinNum - indexMaxNum;
}

for (let j = indexMinNum + 1; j < indexMaxNum; j++) {
    summIndex += arr[j];
}

console.log(summIndex);