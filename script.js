let numbers = Array.from(document.querySelectorAll(".number"));
let operations = Array.from(document.querySelectorAll(".operation"));
let buttons = Array.from(document.querySelectorAll(".col"));
let screen = document.querySelector(".screen")

let inputtedNum1 = false;
let inputtedNum2 = false
let inputtedOperation = false;
let hasDecimalClicked = false;
let num1;
let num2;
let operation;

function clear(){
    inputtedNum1 = false;
    inputtedNum2 = false
    inputtedOperation = false;
    hasDecimalClicked = false;
    screen.textContent = "";
}

function displayNumber(e){
    // Check for decimal point
    if (e.target.textContent === "."){
        if (screen.textContent.includes(".")) return
    }
    // Check if num1 or num2
    if (inputtedOperation) screen.textContent = "";
    screen.textContent += e.target.textContent;
}

function rememberOperation(e){
    if (!inputtedOperation){
        num1 = parseFloat(screen.textContent);
        let operation = e.target;
        operation.style.backgroundColor = "#0A0908"
        inputtedOperation = true;
        inputtedOperation = e.target.textContent;
    } else {
        num2 = parseFloat(screen.textContent);
        console.log(num2);
    }
}

function operate(num1, num2, operation){
    switch (operation) {
        case "+":
            num1 + num2
            break;
        case "-":
            num1 - num2
            break;
        case "*":
            num1 * num2
            break;
        case "/":
            num1 / num2
            break;
        case "+":
            num1 + num2
            break;
    
        default:
            break;
    }
}

numbers.map((number) =>{
    number.addEventListener ("click", displayNumber)
})

operations.map((operation) =>{
    operation.addEventListener ("click", 
        (operation.textContent === "AC") ? clear : rememberOperation);
})
