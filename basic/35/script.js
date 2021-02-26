/*
Basic Exercise 35
Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.
*/
const string = prompt('Please enter a string.');
const character = prompt('Please enter a character to check.');

for (let i = 1; i < 4; i++) {
    if (string[i].toUpperCase() === character.toUpperCase()) {
        const result = 'True';
        console.log(`Position: ${i + 1}`, result);
    }
}
