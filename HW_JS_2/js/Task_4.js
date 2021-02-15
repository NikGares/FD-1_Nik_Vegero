"use strict";

// The user enters the name of the browser and the program displays information about each browser.
// Edge, IE, Opera -> partial support;
// Chrome, Mozila, Safari -> support;
// Other -> not support;


let browsers = prompt('Введите название браузера');
switch (browsers.toUpperCase()){
    case 'EDGE':
    case 'IE': 
    case 'OPERA':
        alert ('partial support');
        break;

    case 'CHROME':
    case 'MOZILA': 
    case 'SAFARI':
        alert ('support');
        break;

    default:
    alert('not support');
}