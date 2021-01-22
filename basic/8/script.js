/*
Basic Exercise 8
Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
*/
const guessNum = Number(prompt('Guess a number from 1 to 10'));
const num = Math.floor(Math.random() * 10) + 1;

guessNum === num ? console.log('Good Work') : console.log('Not matched')
console.log(num);

