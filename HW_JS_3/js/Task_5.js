"use strict";

// Create an array with 10 random elements and display their all in console.


let arr = [];

for (i = 0; i < 10; i++){
    arr.push(Math.floor(Math.random() * 100));
}

console.log(arr);