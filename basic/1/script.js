/* 
Basic Exercise 1:
Write a JavaScript program to display the current day and time in the following format. 
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

const today = new Date();
const day = today.getDay();
const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayMessage = `Today is ${dayArray[day]}.`;

const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
const twelveHourClock = (hour >= 12) ? 'PM' : 'AM';
const hourOfTwelveHourClock = (hour >= 12) ? (hour - 12) : hour;
const timeMessage = `Current time is: ${hourOfTwelveHourClock} ${twelveHourClock} : ${minute} : ${second}`;

document.querySelector('body').textContent = `${dayMessage} ${timeMessage}`;

/*
MDN Resource:
1. Date.prototype.getDate(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
2. Date.prototype.getDay(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
3. Date.prototype.getHours(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
4. Date.prototype.getMinutes(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes
5. Date.prototype.getSeconds(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds
*/