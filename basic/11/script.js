/*
Basic Exercise 11
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
*/

const celsius = document.getElementById('celsius');
const btn1 = document.getElementById('btn-1');
const result1 = document.getElementById('result-1');

const fahrenheit = document.getElementById('fahrenheit');
const btn2 = document.getElementById('btn-2');
const result2 = document.getElementById('result-2');

function cToF() {
    result1.textContent = celsius.value / 5 * 9 + 32;
}

function fToC() {
    result2.textContent = (fahrenheit.value - 32) / 9 * 5;
}

btn1.addEventListener('click', cToF);
btn2.addEventListener('click', fToC);

/*
Formula: c/5 = (f-32)/9
c = temperature in Celsius = (f-32)/9*5
f = temperature in Fahrenheit = c/5*9+32
*/