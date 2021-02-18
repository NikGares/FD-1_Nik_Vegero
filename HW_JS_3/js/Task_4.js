"use strict";

// A string is entered, consisting of words separated by spaces. It is required to count the number of words in it. Spaces may be any quantity between words. 
// Example: 'hello    world. I hate      js.      '  ->  5;

let UserStr = prompt();
let amountWord = 0;
let isWord = false;

for(let i = 0; i < UserStr.length; i++) {
    if (UserStr[i] !== ' ' && !isWord) {
        isWord = true;
        amountWord++;
    } else if(UserStr[i] === ' ') {
      isWord = false;
    }
}

console.log(amountWord);

