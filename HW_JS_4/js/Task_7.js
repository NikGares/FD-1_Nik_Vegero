"use strict";

// Find in the array those elements whose value is less than the arithmetic mean taken from all elements of the array. Input data: none, just use variable with array. Output data: display array with these values. Example: [2, 4, 6, 1, 3] -> [2, 1, 3].


let arr  = [2, 3, 1, 8, 3, 5, 9, 6, 8];
let newarr = [];
let arithmetic = 0;
for (let i = 0;i < arr.length;i++){
    arithmetic += arr[i];
}

arithmetic /= arr.length;

console.log(arithmetic);

for (let j = 0; j < arr.length; j++){
    if (arr[j] < arithmetic) {
        newarr.push(arr[j]);
    }
}

console.log(newarr);