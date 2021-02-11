/*
Basic Exercise 17
Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
*/

const answer = document.getElementById('answer');
const num = Number(prompt('Please enter a number.'));

answer.innerText = num <= 19 ? 19 - num : (num - 19) * 3;
