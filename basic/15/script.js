/*
Basic Exercise 15
Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
*/

function differnce(number) {
    return number <= 13 ? 13 - number : (number - 13) * 2;
}

differnce(13);
differnce(12);
differnce(14);
