let numbers = Array.from(document.querySelectorAll(".number"));
let operations = Array.from(document.querySelectorAll(".operation"));

let screen = document.querySelector(".screen")

let inputtedNum1 = false;
let inputtedNum2 = false
let inputtedOperation = false;
let hasDecimalClicked = false;

function clear(){
    inputtedNum1 = false;
    inputtedNum2 = false
    inputtedOperation = false;
    hasDecimalClicked = false;
    screen.textContent = "";
}

function displayNumber(e){
    if (e.target.textContent === "."){
        if (screen.textContent.includes(".")) return
    }
    screen.textContent += e.target.textContent;
}

function rememberOperation(e){
    if (!inputtedOperation){
        let operation = e.target;
        operation.style.backgroundColor = "#0A0908"
        inputtedOperation = true;
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




