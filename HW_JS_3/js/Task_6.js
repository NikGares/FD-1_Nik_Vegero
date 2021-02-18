"use strict";

// Transform entered string to array and display array in console. 
// Example: 'I am smart' -> ['I', ' ', 'a', 'm', ' ', 's', ...];


let userText = prompt('');
let arr = [];

for (i = 0; i < userText.length; i++){
    arr[i] = userText[i];
}

console.log(arr);