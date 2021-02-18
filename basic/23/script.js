/*
Basic Exercise 23
Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.
*/

const body = document.querySelector('body');
const string = prompt('Please enter a string');

if (string.length >= 1) {
    body.innerText = string.slice(1, string.length) + string[0];
}