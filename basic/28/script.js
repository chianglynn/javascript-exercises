/*
Basic Exercise 28
Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.
*/
const answer = document.getElementById('answer');
const num1 = +prompt('Please enter the first number.');
const num2 = +prompt('Please enter the second number.');

if (num1 >= 50 && num1 <= 99 || num2 >= 50 && num2 <= 99) {
    answer.innerText = 'True';
} else {
    answer.innerText = 'False';
}