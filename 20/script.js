/*
Basic Exercise 20
Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
*/

const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const answer = document.getElementById('answer');

const num1 = Number(prompt('Please enter the first number.'));
const num2 = Number(prompt('Please enter the second number.'));

num1El.innerText = num1;
num2El.innerText = num2;

if (num1 < 0 && num2 > 0 || num1 > 0 && num2 < 0) {
    answer.innerText = 'True';
} else {
    answer.innerText = 'False';
}
