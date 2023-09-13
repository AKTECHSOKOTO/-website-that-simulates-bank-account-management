// script.js

class Calculator {
    add(x, y) {
        return x + y;
    }

    subtract(x, y) {
        return x - y;
    }

    multiply(x, y) {
        return x * y;
    }

    divide(x, y) {
        if (y === 0) {
            throw new Error("Cannot divide by zero!");
        }
        return x / y;
    }
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const resultElem = document.getElementById('result');

    const calculator = new Calculator();

    let result;

    try {
        switch (operation) {
            case "add":
                result = calculator.add(num1, num2);
                break;
            case "subtract":
                result = calculator.subtract(num1, num2);
                break;
            case "multiply":
                result = calculator.multiply(num1, num2);
                break;
            case "divide":
                result = calculator.divide(num1, num2);
                break;
            default:
                throw new Error("Invalid operation");
        }
        resultElem.textContent = result;
    } catch (error) {
        alert(error.message);
    } finally {
        console.log("Calculation attempted");
    }
}
