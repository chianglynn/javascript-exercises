/*
Basic Exercise 6
Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
*/

const input = document.getElementById('yearinput');
const button = document.getElementById('enter');
const p = document.querySelector('p');

function leapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

function inputLength() {
    return input.value.length;
}

function afterKeypress(e) {
    if (inputLength() > 0 && e.keyCode === 13) {
        const result = leapYear(input.value);
        p.textContent = `Leap year: ${result}`;
    }
}

function afterClick() {
    if (inputLength() > 0) {
        const result = leapYear(input.value);
        p.textContent = `Leap year: ${result}`;
    }
}

button.addEventListener("click", afterClick);
input.addEventListener("keypress", afterKeypress);

/*
Resource:
Leap Years: https://www.mathsisfun.com/leap-years.html
*/