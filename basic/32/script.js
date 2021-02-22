/*
Basic Exercise 32
Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
*/

const num1 = +prompt('Please enter the first number.');
const num2 = +prompt('Please enter the second number.');

Math.abs(num1 - 100) > Math.abs(num2 - 100) ? alert(num2) : alert(num1);