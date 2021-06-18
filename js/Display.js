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