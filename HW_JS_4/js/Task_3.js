"use strict";

// Remove identical values from an array. Input data: none, just use variable with array. Output data: display modified array. Example: [5, 3, 7, 4, 9, 5, 4, 3] -> [5, 3, 7, 4, 9].


let arr = [1, 4, 8, 3, 1, 3, 4, 7, 7, 6];

for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (arr[i] === arr[j]){
            arr.splice(j, 1);
        }
    }
}

console.log(arr);