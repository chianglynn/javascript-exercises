/*
Basic Exercise 30
Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.
*/

const string = prompt('Please enter a string');

const check = string.slice(4, 10).toUpperCase() === 'SCRIPT' ? string.slice(0, 3) + string.slice(10, string.length) : string;

alert(check);

