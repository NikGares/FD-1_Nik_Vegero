"use strict";

// Create variables a = 20 and b = 15. Swap the values of variables (a = 15, b = 20).
// using additional variable;
// without additional variable;


// 1. without additional variable

let a = 20;
let b = 15;

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);


// 2. using additional variable

let a = 20;
let b = 15;
let temp;

temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);