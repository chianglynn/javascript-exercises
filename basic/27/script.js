/*
Basic Exercise 27
Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.
*/

const string = prompt("Please enter a string to to check whether a string starts with 'Java'.");

string.slice(0, 4).toUpperCase() === 'JAVA' ? alert('True') : alert('False');

