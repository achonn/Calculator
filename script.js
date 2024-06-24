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
        step = 1;
        currentOperand = Number(firstNumArray.join(''));
        currentOperandTextElement.innerText = currentOperand;
    } else if (step === 2) {
        secondNumArray.push(number);
        currentOperand = Number(secondNumArray.join(''));
        currentOperandTextElement.innerText = currentOperand;
    }
}


function chooseOperation(op) {
    if (step === 1) {
        step = 2;
        operation = op;
        previousOperand = currentOperand;
        previousOperandTextElement.innerText = `${previousOperand} ${operation}`;
        currentOperand = '';
    }
}

function clear() {  
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    step = 0;
    firstNumArray = [];
    secondNumArray = [];
    previousOperandTextElement.innerText = '';
    currentOperandTextElement.innerText = '0';
}



function compute() {
    let result;
    const firstNum = parseFloat(previousOperand);
    const secondNum = parseFloat(currentOperand);

    if (isNaN(firstNum) || isNaN(secondNum)) return;


    switch (operation) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        default:
            return;
    }
    currentOperandTextElement.innerText = result;
    previousOperandTextElement.innerText = '';
    currentOperand = result.toString();
    previousOperand = '';
    operation = undefined;
    step = 0;
    firstNumArray = [];
    secondNumArray = [];
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