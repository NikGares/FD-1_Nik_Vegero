"use strict";

// Find a chain of numbers in array with max sum. Input data: none, just use variable with array. Output data: display a chain of numbers. Example: [2, 5, -9, 2, -5, 10, 2, -2] -> [10, 2]. Try to use only one cycle.


// Не полностью выполнил(находит сумму цепочки чисел с максимальной суммой, но не отображает саму цепочку чисел)
let arr = [2, 5, -9, 2, -5, 10, 2, -2];
let maxNumbers = [];
let current = arr[0] + arr[1];
let maxSumm = current;

for (let i = 0; i in arr; i++) {
    current = arr[i];
    for (let j = i + 1; j in arr; j++) {
        current = current + arr[j];
        if (current > maxSumm) {
            maxSumm = current;
        }
    }
}
console.log(maxSumm);
console.log(maxNumbers);