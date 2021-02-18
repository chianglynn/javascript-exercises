/*
Basic Exercise 22
Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
*/

const body = document.querySelector('body');
const string = prompt('Please enter a string.');
const removePosition = +prompt('Please enter a number to choose a position of the string for removing a character.') - 1;

function removeCharacter(string, removePosition) {
    const string1 = string.slice(0, removePosition);
    const string2 = string.slice(removePosition + 1, string.length);
    const finalString = string1 + string2;
    body.innerText = finalString;
}

removeCharacter(string, removePosition);