"use strict";

// Find all prime numbers from 0 to 10000. Input data: none. Output data: prime numbers. Use nested cycles.

let temp = false;

for(let i = 1; i < 10000; i++) {
  for(let j = Math.round(i / 2); j > 1; j--) {
    if (i % j === 0) {
      temp = false;
      break;
    } else {
      temp = true;
    }
  }
  
  if (temp) {
      console.log(i);
  }
}