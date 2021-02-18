/*
Basic Exercise 24
Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
*/

const body = document.querySelector('body');
const string = prompt('Please enter a string');

body.innerText = string[0] + string + string[0];