//currentValue = running total of operation
let storedValue = null;
let currentValue = null;
let operator = '';


const display = document.querySelector(".display #result");
const displayOperation = document.querySelector(".display #operation");

const equalsBtn = document.querySelector("#equalsBtn");
const addBtn = document.querySelector("#addBtn");
const subtractBtn = document.querySelector("#subtractBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const divideBtn = document.querySelector("#divideBtn");

const zeroBtn = document.querySelector("#zeroBtn");
const oneBtn = document.querySelector("#oneBtn");
const twoBtn = document.querySelector("#twoBtn");
const threeBtn = document.querySelector("#threeBtn");
const fourBtn = document.querySelector("#fourBtn");
const fiveBtn = document.querySelector("#fiveBtn");
const sixBtn = document.querySelector("#sixBtn");
const sevenBtn = document.querySelector("#sevenBtn");
const eightBtn = document.querySelector("#eightBtn");
const nineBtn = document.querySelector("#nineBtn");

const allClearBtn = document.querySelector("#allClearBtn");


//NUMBER BUTTONS//
zeroBtn.addEventListener("click", () => {
    updateCurrentValue("0");
});
oneBtn.addEventListener("click", () => {
    updateCurrentValue("1");
});
twoBtn.addEventListener("click", () => {
    updateCurrentValue("2");
});
threeBtn.addEventListener("click", () => {
    updateCurrentValue("3");
});
fourBtn.addEventListener("click", () => {
    updateCurrentValue("4");
});
fiveBtn.addEventListener("click", () => {
    updateCurrentValue("5");
});
sixBtn.addEventListener("click", () => {
    updateCurrentValue("6");
});
sevenBtn.addEventListener("click", () => {
    updateCurrentValue("7");
});
eightBtn.addEventListener("click", () => {
    updateCurrentValue("8");
});
nineBtn.addEventListener("click", () => {
    updateCurrentValue("9");
});

//FUNCTION BUTTONS//
addBtn.addEventListener("click", () => {
    if(currentValue !== null) updateDisplay('+');
    
});
subtractBtn.addEventListener("click", () => {
    if(currentValue !== null) updateDisplay('-');
})
multiplyBtn.addEventListener("click", () => {
    if(currentValue !== null) updateDisplay('*');
})
divideBtn.addEventListener("click", () => {
    if(currentValue !== null) updateDisplay('/');
})

//OTHER BUTTONS//
allClearBtn.addEventListener("click", () => {
    currentValue = null;
    storedValue = null;
    operator = '';
    display.textContent = '';
    displayOperation.textContent = '';
});

equalsBtn.addEventListener("click", () => {
    // displayOperation.textContent += " " + currentValue + " =";
    // storedValue = operate(storedValue, currentValue, operator);
    // displayOperation.textContent += " " + storedValue;
    // display.textContent = storedValue;
    // currentValue = null;
    // operator = '';
});


function updateDisplay(newOperator){
    if(operator === '') operator = newOperator;
    console.log(currentValue + " " + storedValue);
    displayOperation.textContent = currentValue + " " + operator;
    storedValue = operate(storedValue, currentValue, operator);
    display.textContent = storedValue;
    operator = newOperator;
    displayOperation.textContent = storedValue + " " + operator;
    console.log(currentValue + " " + storedValue);
    currentValue = null;
}

function updateCurrentValue(value){
    if(currentValue === null){
        display.textContent = value;
        currentValue = value;
    } else{
        display.textContent += value;
        currentValue += value;
    }
}

function operate(stored, current, operator){
    if (stored === null){
        return parseInt(current);
    } else {
        switch(operator){
            case '+':
                return parseInt(stored) + parseInt(current);
            case '-':
                return parseInt(stored) - parseInt(current);
            case '*':
                return parseInt(stored) * parseInt(current);
            case '/':
                return parseInt(stored) / parseInt(current);
        }
    }
}
