"use strict";

// Generate 100 numbers from 0 to 1000 and calculate odd and even count of numbers statistics. Input data: none. Output data: 1 -> percent even numbers; 2-> percent odd numbers.


let even = 0;
let odd = 0;

for (let i = 0; i < 100; i++){
    let random =  Math.floor(Math.random() * 1000);
      if (random % 2 === 0){
        odd++;
      } else{
        even++;
      }   
}

console.log(`percent even numbers = ${even * 100 / 100}`);
console.log(`percent odd numbers = ${odd * 100 / 100}`);

