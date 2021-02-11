"use strict";

// Create a program that will count the amount of seconds in days. For input amounts of days use a prompt function. Result should be displayed in the alert.

let userDays = Number(prompt(`Введите количество дней`));
alert(`В ${userDays} днях ${userDays*86400} секунд`);