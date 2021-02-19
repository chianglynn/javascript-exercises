/*
Basic Exercise 26
Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
*/
const body = document.querySelector('body');
const string = prompt('Please enter a string.');
const lastThreeCharacters = string.slice(string.length - 3, string.length);

if (string.length >= 3) {
    body.innerText = lastThreeCharacters + string + lastThreeCharacters;
}

