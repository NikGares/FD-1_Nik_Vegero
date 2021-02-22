"use strict";

// Rearrange the elements of the given array in reverse order. Input data: none, just use variable with array. Output data: display reversed array. Example: [4, 2, 1, 5] -> [5, 1, 2, 4].

let arr = [0,1,2,3,4,5,6,7,8,9];
let temp;

for(var i = 0, j = arr.length - 1; i < j; i++, j--) {
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

console.log(arr);