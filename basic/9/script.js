/*
Basic Exercise 9
Write a JavaScript program to calculate days left until next Christmas.
*/

let time = new Date();
let nowTime = time.getTime();
time.setMonth(11);
time.setDate(25);
let endTime = time.getTime();

const oneDay = 24 * 60 * 60 * 1000;
const nextXmas = (endTime - nowTime) / oneDay;
console.log(nextXmas);

