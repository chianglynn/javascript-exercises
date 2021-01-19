/*
Basic Exercise 3
Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

console.log(`mm-dd-yyyy: ${month}-${day}-${year}
mm/dd/yyyy: ${month}/${day}/${year}
dd-mm-yyyy: ${day}-${month}-${year}
dd/mm/yyyy: ${day}/${month}/${year}
`);

/*
MDN Resource:
1. Date.prototype.getMonth(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
2. Date.prototype.getFullYear(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
*/