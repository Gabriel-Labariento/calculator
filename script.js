/**
 * What are the things that a calculator needs to be able to do?
 * - When a user clicks on a number, display that number on the screen
 * - When a user clicks on an operation, take the number on the screen and 
    assign it as the first number
    - Make sure that the user cannot use the operations unless there is a
    number on the screen
    - Make sure the user cannot use the operations after assigning the first number
    unless they have entered the second number
    - When a user clicks on a decimal button:
        - If it is the only character on the screen, the number is equal to 0
        - If there is already a decimal on the screen, the user cannot click on it again
    - Clear, change sign, and percent are all unary operations.
    - Divide, multiply, add, and subtract are binary operations
    - Equals is different from the 4 above because you do not need to enter a new number

    What is the process of an operation
    1. Input a first number
    2. Select an operation only if there is already a first number
    3. Store the first number and the operation in a variable
    4. Input a second number (Optional)
    5. When another operation is clicked, the num on the screen becomes the 2nd number.
    6. Store the recently clicked operation in a temporary variable (nextOperation)
    6. Apply the operation stored in memory to the first and second number. 
 */

let numbers = Array.from(document.querySelectorAll(".number"));
let operations = Array.from(document.querySelectorAll(".operation"));
let screen = document.querySelector(".screen")
let clearBtn = document.querySelector(".clear")
let equalSign = document.querySelector(".equalSign")
let inputtedOperation = false;
let inputtedNum1 = false;
let inputtedNum2 = false;

let currentOperation = null;
let num1 = null;
let num2 = null;

numbers.map((number) => {
    number.addEventListener("click", displayNumber)
})

operations.map((operation) => {
    operation.addEventListener("click", setOperation);
})

equalSign.addEventListener("click", () => {
    if (inputtedNum1 && inputtedOperation){
        num2 = parseFloat(screen.textContent);
    }
    operate(num1, num2, currentOperation)
})

clearBtn.addEventListener("click", () => location.reload())

function displayNumber(e){
    if (e.target.textContent === "."){
        if (handleDecimalInput()) return;
    }
    if (inputtedNum1 && !inputtedNum2){
        screen.textContent = "";
        inputtedNum2 = true;
    }
    screen.textContent += e.target.textContent;
}

function handleDecimalInput(){
    if (screen.textContent.includes(".")){
        return true;
    }
}

function getNumber(){
    return parseFloat(screen.textContent);
}

function setOperation(e){
    if (screen.textContent !== ""){
        // Disable operations until a number is clicked again 
        if (inputtedNum1 && !inputtedNum2) {
            return;
        }
        if (num1 !== null && currentOperation !== null ){
            num2 = getNumber();
            operate(num1, num2, currentOperation);
        }
        currentOperation = e.target.textContent
        console.log(currentOperation);
        inputtedOperation = true;
        setFirstNum();
    }
}

function checkNum1(){
    return (num1 === undefined) ? false : true;
} 

function setFirstNum(){
    inputtedNum1 = true;
    return num1 = getNumber();
}

function setSecondNum(){
    inputtedNum2 = true;
    return num2 = getNumber();
}

function operate(first, second, operation) {
    if (!(num1 === null && num2 === null && currentOperation === null)){
        switch (operation) {
            case "/":
                screen.textContent = `${first / second}`;
                break;
            case "*":
                screen.textContent = `${first * second}`
                break;
            case "-":
                screen.textContent = `${first - second}`
                break;
            case "+":
                screen.textContent = `${first + second}`
                break;
            default:
                break;
        }
    } else {
        console.log("error")
    }

}