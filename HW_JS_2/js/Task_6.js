"use strict";

// Display a series of natural numbers from minimum to maximum in increments. For example, if the minimum is 10, maximum 35, step 5, then the output should be like this: 10 15 20 25 30 35. The minimum, maximum and step are specified by the user (read from the keyboard).

let min = +prompt('Введите превое число (minimum)');
let max = +prompt('Введите второе число (maximum)');
let step = +prompt('Введите шаг (steps)');
if (min > max) {
min += max;
max = min - max;
min -= max;
}
for (let i = min; i <= max; i += step) {
    console.log(i)
}