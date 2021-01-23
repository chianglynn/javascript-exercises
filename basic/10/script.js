/*
Basic Exercise 10
Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
*/

const num1 = document.getElementById('number1');
const num2 = document.getElementById('number2');
const multiplyBtn = document.getElementById('multiply-btn');
const divideBtn = document.getElementById('divide-btn');
const result = document.getElementById('result');

function multipy() {
    result.textContent = num1.value * num2.value;
}

function divide() {
    result.textContent = num1.value / num2.value;
}

multiplyBtn.addEventListener('click', multipy);
divideBtn.addEventListener('click', divide);

