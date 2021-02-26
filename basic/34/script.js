/*
Basic Exercise 34
Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
*/
const num1 = +prompt('Please enter the first Number.');
const num2 = +prompt('Please enter the second Number.');

if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
    if (num1 > num2) {
        alert(num1);
    } else if (num1 < num2) {
        alert(num2);
    } else {
        alert('Same number');
    }
}