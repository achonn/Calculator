const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operations]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


let currentOperand = '';
let previousOperand = '';
let operation = undefined;
let step = 0;



let firstNumArray = [];
let secondNumArray = [];



function getNumber(number) {
    if (step === 0 || step === 1) {
        firstNumArray.push(number);
        currentOperand = Number(firstNumArray.join(''));
        currentOperandTextElement.innerText = currentOperand;
    } else if (step === 2) {
        previousOperand = currentOperand;
        currentOperand = '';
        secondNumArray.push(number);
        currentOperand = Number(secondNumArray.join(''));
        previousOperandTextElement.innerText = previousOperand;
        currentOperandTextElement.innerText = currentOperand;
    }
}


function chooseOperation(op) {
    step = 2;
    operation = op;
}

function clear() {  
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    step = 0;
    firstNumArray = [];
    secondNumArray = [];
    previousOperandTextElement.innerText = previousOperand;
    currentOperandTextElement.innerText = currentOperand;
}

function compute() {
    console.log('Pressed Equals');
}



numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        getNumber(button.innerText);
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText);
    })
})

equalsButton.addEventListener('click', button => {
    compute();
})

allClearButton.addEventListener('click', button => {
    clear();
})

deleteButton.addEventListener('click', button => {
    deleteNumber();
})