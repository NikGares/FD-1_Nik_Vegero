"use strict";

// Find the maximum figure of the entered number. For example, ‘57652503’ max figure is ‘7’. Input data: 1 -> number. Output data: max figure.

let UserNum = prompt();
let maxNum = 0;

for(let i = 0; i < UserNum.length; i++) {
    if(Number(UserNum[i]) > maxNum) {
        maxNum = Number(UserNum[i]);
    }
}

console.log(maxNum);

