/*
Basic Exercise 4
Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
*/

const side1 = 5;
const side2 = 6;
const side3 = 7;
const s = (side1 + side2 + side3) / 2;
const triangleArea = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

console.log(triangleArea);

/*
1. Heron's formula:
triangleArea = {\sqrt  {s(s-a)(s-b)(s-c)}}
s = (a+b+c)/2

2. MDN Resource:
Math.sqrt(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
*/