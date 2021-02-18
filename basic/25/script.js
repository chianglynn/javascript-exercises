/*
Basic Exercise 25
Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.
*/

const num = +prompt('Please enter a number to check whether a given positive number is a multiple of 3 or a multiple of 7.');

num % 3 === 0 || num % 7 === 0 ? alert('True') : alert('False');
