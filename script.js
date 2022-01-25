//TO-DO:
//1. can do operations using simple numbers [x]
//2. can press equals to get final numbers [x]
    //- after pressing equals, cannot press operator numbers
    //- pressing a number will restart operation
        //maybe reset all variables after showing answers
//3. can do greater-than-single digit calculations [x]
//4. can backspace [x]
//5. keyboard functionality [x]
//6. show error message if attempting to divide by zero [x]
//7. add decimal pts


let storedValue = null;
let currentValue = null;
let operator = '';
let modifierKeys = {};

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
const backspaceBtn = document.querySelector("#backspaceBtn");

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

//KEYBOARD EVENTS//
document.addEventListener('keydown', (e) => {
    const keyValue = e.key;

    modifierKeys[keyValue] = true;

    if(modifierKeys['Shift'] && keyValue === '+'){
        if(currentValue !== null) updateDisplay('+');
    } else if(modifierKeys['Shift'] && keyValue === '*'){
        if(currentValue !== null) updateDisplay('*');
    } else if(modifierKeys['Shift'] && keyValue === '?'){
        if(currentValue !== null) updateDisplay('/');
    }

    switch(keyValue){
        case "0":
            updateCurrentValue("0");
            break;
        case "1":
            updateCurrentValue("1");
            break;
        case "2":
            updateCurrentValue("2");
            break;
        case "3":
            updateCurrentValue("3");
            break;
        case "4":
            updateCurrentValue("4");
            break;
        case "5":
            updateCurrentValue("5");
            break;
        case "6":
            updateCurrentValue("6");
            break;            
        case "7":
            updateCurrentValue("7");
            break;
        case "8":
            updateCurrentValue("8");
            break;
        case "9":
            updateCurrentValue("9");
            break;
        case "Backspace":
            backspace();
            break; 
        case "-":
            if(currentValue !== null) updateDisplay('-');
            break;
        case "=":
            equals();
            break;
    }
});

document.addEventListener('keyup', (e) => {
    delete modifierKeys[e.key];
})

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

equalsBtn.addEventListener("click", equals);

backspaceBtn.addEventListener("click", backspace);

function updateDisplay(newOperator){
    //if operator blank, add new operator
    if(operator === '') operator = newOperator;
    //if operator is '=' (from pressing the equals button), don't do anything
    if(operator === '=') return;

    //dividing by zero causes error
    if(operator === '/' && currentValue === '0') {
        alert('Cannot divide by zero!');
        currentValue = null;
        return;
    }
    
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
    if(operator === '='){
        return;
    } 
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

function backspace(){
    let tempDisplay = display.textContent.split('');
    tempDisplay.pop();
    currentValue = tempDisplay.join('');
    display.textContent = currentValue;
}

function equals(){
    if(currentValue === null || operator === '') return;
    if(currentValue === '0' && operator === '/') {
        alert('Cannot divide by zero!');
        currentValue = null;
        return;
    }
    displayOperation.textContent += " " + currentValue + " =";
    storedValue = operate(storedValue, currentValue, operator);
    displayOperation.textContent += " " + storedValue;
    display.textContent = storedValue;
    currentValue = null;
    operator = '=';
}
