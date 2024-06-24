const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operations]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


let firstNumber
let secondNumber
let operation

function getNumber(number) {
    console.log(number);
}


function chooseOperation(op) {
    console.log(op);
}

function clear() {

};

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