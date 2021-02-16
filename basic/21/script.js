/*
Basic Exercise 21
Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
*/
const newString = document.getElementById('newString');
const string = prompt('Please enter a string.');

newString.innerText = (string.slice(0, 2).toUpperCase() === 'PY') ? string : 'Py' + string;
