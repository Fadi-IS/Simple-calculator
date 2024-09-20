const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

const number1El = document.querySelector("#number1");
const number2El = document.querySelector("#number2");
const resultEl = document.querySelector("#result");

function calculator(operation) {
    const num1 = Number(number1El.value);
    const num2 = Number(number2El.value);
    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            result = "Invalid operation";

    }
    resultEl.textContent = `Result: ${result}`;

}


addBtn.addEventListener("click", () => calculator("add"));
subtractBtn.addEventListener("click", () => calculator("subtract"));
multiplyBtn.addEventListener("click", () => calculator("multiply"));
divideBtn.addEventListener("click", () => calculator("divide"));