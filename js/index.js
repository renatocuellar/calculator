//let's start with the Variables

const displayLastValue = document.getElementById('calculator__displayLastValue');
const displayNewValue = document.getElementById('calculator__displayNewValue');
const numberButtons = document.querySelectorAll('.calculator__button-number');
const operatorButtons = document.querySelectorAll('.calculator__button-operator');


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
    
    makeMathOperarion(type){
        this.operationType !== 'equal' && this.calculate();
        this.operationType = type;
        this. newValue = this.newValue || this.lastValue;
        this.newValue = '';
        this.printValues();
    }
    
    addNumber(number) {
        if(number === '.' && this.lastValue.includes('.')) return
        this.lastValue = this.lastValue.toString() + number;
        this.printValues();
    }
    
    printValues() {
        this.displayLastValue.textContent = this.lastValue;
        this.displayNewValue.textContent = `${this.newValue} ${this.operation}`;
    }

    calculate() {
        const lastValue = parseFloat(this.lastValue);
        const newValue = parseFloat(this.newValue);

        if( isNaN(lastValue) || isNaN(newValue)) return
        this.lastValue = this.calculator [this.operationType](lastValue, newValue)
    }
    
}


//Operation

numberButtons.forEach(button => {
    button.addEventListener('click', () =>  display.addNumber(button.innerHTML));
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () =>  display.makeMathOperarion(button.value));
})

const display = new Display(displayLastValue, displayNewValue);
