/*
Basic Exercise 31
Write a JavaScript program to find the largest of three given integers.
*/

const num1 = +prompt('Please enter the first number.');
const num2 = +prompt('Please enter the second number.');
const num3 = +prompt('Please enter the third number.');
let largestNum = 0;

num1 > num2 ? largestNum = num1 : largestNum = num2;
num3 > largestNum ? largestNum = num3 : largestNum;

alert(`The largest number is ${largestNum}.`);