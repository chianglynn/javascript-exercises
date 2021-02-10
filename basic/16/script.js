/*
Basic Exercise 16
Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const num1 = Number(prompt('Please enter the first number'));
const num2 = Number(prompt('Please enter the second number'));
const answer = document.getElementById('answer');

if (num1 === num2) {
    answer.innerText = `${(num1 + num2) * 3}`;
} else {
    answer.innerText = `${(num1 + num2)}`;
}
