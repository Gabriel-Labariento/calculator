let numbers = Array.from(document.querySelectorAll(".number"));
let operations = Array.from(document.querySelectorAll(".operation"));
let screen = document.querySelector(".screen")
let clearBtn = document.querySelector(".clear")
let equalSign = document.querySelector(".equalSign");
let inputtedNum1 = false;
let inputtedNum2 = false
let inputtedOperation = false;
let hasDecimalClicked = false;
let isInputtingNum2 = false;
let num1;
let num2;
let operation;

function clear(){
    inputtedNum1 = false;
    inputtedNum2 = false
    inputtedOperation = false;
    hasDecimalClicked = false;
    isInputtingNum2 = false;
    screen.textContent = "";
    num1 = null;
    num2 = null;
    operation = null;
    operations.map(operation => operation.style.backgroundColor = "#3D3429")
}

function prepareNextOperation(){
    inputtedNum1 = true;
    inputtedNum2 = false;
    inputtedOperation = false;
    hasDecimalClicked = (screen.textContent.includes(".") ? true : false);
    isInputtingNum2 = false;
    num1 = screen.textContent;
    num2 = null;
    operation = null;
    operations.map(operation => operation.style.backgroundColor = "#3D3429")
}

equalSign.addEventListener("click", () => {
    screen.textContent = operate(num1, num2, operation);
})

clearBtn.addEventListener("click", clear);

numbers.map((number) =>{
    number.addEventListener ("click", displayNumberOne)
})

operations.map((operation) =>{
    operation.addEventListener ("click", operate);
})

function displayNumberOne(e){
    if (screen.textContent.length > 7 && !inputtedOperation) {
        return;
    }
    if (inputtedOperation) {
        displayNumberTwo(e);
        return;
    }
    if (e.target.textContent === "."){
        if (!inputtedDecimal()){
            if (screen.textContent === "") {
                 screen.textContent += "0."
            } else {
                 screen.textContent += "."
            }
        }
        return;
    }
    screen.textContent += e.target.textContent
}

function displayNumberTwo(e){
    if (!isInputtingNum2){
        screen.textContent = "";
    }
    if (e.target.textContent === "."){
        if (!inputtedDecimal()){
            if (screen.textContent === "") {
                 screen.textContent += "0."
            } else {
                 screen.textContent += "."
            }
        }
        return;
    }
    isInputtingNum2 = true;
    screen.textContent += e.target.textContent
}


function setFirstNum(){
    if (screen.textContent === "") {
        return;
    } else {
        num1 = parseFloat(screen.textContent);
        inputtedNum1 = true;
        console.log(num1);
    }
}

function setOperation(e){
    if (!inputtedNum1) return;
    else {
        operation = e.target;
        inputtedOperation = true;
        operation.style.backgroundColor = "lightGray"
    }
    
}

function setSecondNum(){
    if (screen.textContent === "") {
        return;
    } else {
        num2 = parseFloat(screen.textContent);
        inputtedNum2 = true;
        console.log(num2);
    }
}

function operate(e){
    if (!inputtedOperation) {
        setFirstNum();
        setOperation(e);
    }
    else {
        setSecondNum();
        switch (operation.textContent) {
            case "/":
                displayResult(num1 / num2);
                break;
            case "*":
                displayResult(num1 * num2);
                break;
            case "-":
                displayResult(num1 - num2);
                break;
            case "+":
                displayResult(num1 + num2);
                break;
            default:
                break;
        }
    }
}

function displayResult(num){
    screen.textContent = num;
}

function inputtedDecimal(){
    return (screen.textContent.includes(".")) ? true : false 
}

// User enters first number
// When a user first clicks an operation, the first number is stored as well as the operation
// When the user next clicks an operation, the following happens
    // 1. the second number is stored and the operation is applied to the first two numbers
    // 2. The result becomes the new first number
    // 3. The operation and the second number is cleared
