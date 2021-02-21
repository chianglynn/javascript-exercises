/*
Basic Exercise 29
Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.
*/
const answer = document.getElementById('answer');
const num1 = +prompt('Please enter the first number.');
const num2 = +prompt('Please enter the second number.');
const num3 = +prompt('Please enter the third number.');

if (num1 >= 50 && num1 <= 99 || num2 >= 50 && num2 <= 99 || num3 >= 50 && num3 <= 99) {
    answer.innerText = 'True';
} else {
    answer.innerText = 'False';
}