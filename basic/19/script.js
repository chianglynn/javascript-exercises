/*
Basic Exercise 19
Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
*/

const answer = document.getElementById('answer');
const num = Number(prompt('Please enter a number.'));

if (Math.abs(100 - num) <= 20 || Math.abs(400 - num) <= 20) {
    answer.innerText = 'True';
} else {
    answer.innerText = 'False';
}

/*
MDN Resource:
Math.abs(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
*/