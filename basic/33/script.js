/*
Basic Exercise 33
Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const num1 = +prompt('Please enter the first Number.');
const num2 = +prompt('Please enter the second Number.');

(num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60 || num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100) ? alert('True') : alert('False');