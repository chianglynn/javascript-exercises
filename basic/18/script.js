/*
Basic Exercise 18
Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const answer = document.getElementById('answer');
const num1 = Number(prompt('Please enter the first number'));
const num2 = Number(prompt('Please enter the second number'));

answer.innerText = num1 === 50 || num2 === 50 || num1 + num2 === 50 ? 'True' : 'False';