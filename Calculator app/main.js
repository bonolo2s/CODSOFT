const equalsBtn = document.getElementById('equalityBtn');

equalsBtn.addEventListener('click', function() {

    const display = document.getElementById('display')

    let value = display.value;
    //let content = display.textContent;
    let number = '15';
    display.textContent = number;

    console.log('Content :',content);
    console.log('Value :',value);///for an enter value
});

// Assuming you have buttons for numbers 0-9, arithmetic operations (+, -, *, /), and equals (=)

let display = document.getElementById('display'); // Assuming 'display' is the id of your display element
let currentNumber = '';
let operator = null;
let firstOperand = null;
let secondOperand = null;

// Add event listeners to number buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        currentNumber += button.value;
        display.textContent = currentNumber;
    });
});

// Add event listeners to operator buttons
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        if (firstOperand === null && currentNumber !== '') {
            firstOperand = Number(currentNumber);
            operator = button.value;
            currentNumber = '';
        }
    });
});

// Add event listener to equals button
document.getElementById('equals').addEventListener('click', () => {
    if (firstOperand !== null && currentNumber !== '' && operator !== null) {
        secondOperand = Number(currentNumber);
        switch (operator) {
            case '+':
                display.textContent = firstOperand + secondOperand;
                break;
            case '-':
                display.textContent = firstOperand - secondOperand;
                break;
            case '*':
                display.textContent = firstOperand * secondOperand;
                break;
            case '/':
                display.textContent = firstOperand / secondOperand;
                break;
        }
        // Reset
        currentNumber = '';
        operator = null;
        firstOperand = null;
        secondOperand = null;
    }
});
