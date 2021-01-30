/*
Basic Exercise 14
Write a JavaScript exercise to get the extension of a filename.
*/

const filename = 'script.js';
const extension = filename.split('.').pop();

console.log(extension);