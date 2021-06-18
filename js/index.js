//let's start with the Variables

const displayLastValue = document.getElementById(calculator__displayLastValue);
const displayNewValue = document.getElementById(calculator__displayNewValue);
const numberButtons = document.querySelectorAll('.calculator__button-number');
const operatorButtons = document.querySelectorAll('.calculator__button-operator');

const display = new Display(displayLastValue, displayNewValue);

//Operation

numberButtons.forEach(button => {
    button.addEventListener('click', () =>  display.addNumber(button.innerHTML));
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () =>  display.addOperator(button.value));
})