//let's start with the Variables

const displayLastValue = document.getElementById('calculator__displayLastValue');
const displayNewValue = document.getElementById('calculator__displayNewValue');
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

//Here we have the calculator

class Calculator {
    addition(num1, num2) {
        return num1 + num2;
    }
    subtraction(num1, num2) {
        return num1 - num2;
    }
    multiplication(num1, num2) {
        return num1 * num2;
    }
    division(num1, num2) {
        return num1 / num2;
    }
};

// here we start to declare the display

class Display {
    constructor(displayLastValue, displayNewValue) {
        this.displayLastValue = displayLastValue;
        this.displayNewValue = displayNewValue;
        this.calculator = new Calculator();
        this.operationType = undefined;
        this.lastValue = '';
        this.newValue = '';
        this.operation = {
            addition:  '+',
            subtraction: '-',
            multiplication: 'X',
            division: '/',
        }
    }

    deleteOnces() {
        this.lastValue = this.lastValue.toString().slice(0, -1);
        this.printValues();
    }

    deleteAll() {
        this.lastValue = '';
        this.newValue = '';
        this.operationType = undefined;
        this.printValues();
    }

    addNumber(number) {
        this.lastValue = number;
        this.printValues();
    }

    printValues() {
        this.displayLastValue.textContent = this.lastValue;
        this.displayNewValue.textContent = this.newValue;
    }
}