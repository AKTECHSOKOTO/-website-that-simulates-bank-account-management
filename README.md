# -website-that-simulates-bank-account-management
Alright, I'll guide you through creating a simple website that uses:  Classes - to structure the code and encapsulate data. Switch Statements - to handle different conditions. Try-Catch-Finally - to handle errors gracefully.

Scenario:
Let's assume our website is a basic calculator that can do addition, subtraction, multiplication, and division. We will use a class for the calculator, a switch statement to choose the operation, and a try-catch-finally block to handle any errors, such as dividing by zero.

Step 1: HTML Structure
First, let's set up the HTML:
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Calculator</title>
</head>

<body>
  <div class="container mt-5">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="input-group mb-3">
                <input type="number" id="num1" class="form-control" placeholder="First Number">
                <select id="operation" class="custom-select">
                    <option value="add">+</option>
                    <option value="subtract">-</option>
                    <option value="multiply">*</option>
                    <option value="divide">/</option>
                </select>
                <input type="number" id="num2" class="form-control" placeholder="Second Number">
                <div class="input-group-append">
                    <button onclick="calculate()" class="btn btn-primary">Calculate</button>
                </div>
            </div>
            <div>
                <p class="lead">Result: <span id="result">0</span></p>
            </div>
        </div>
    </div>
</div>

    <script src="script.js"></script>
</body>

</html>
    
Step 2: JavaScript Code
Now, let's create the JavaScript:

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

To enhance the appearance of your calculator using CSS and Bootstrap, follow these steps:
Step 1: Include Bootstrap
Add the Bootstrap CSS and JS CDN links to the <head> section of your HTML.
<!-- Bootstrap CSS -->
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

<!-- Optional Bootstrap JavaScript and jQuery if you're using Bootstrap's JS components -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>


To enhance the appearance of your calculator using CSS and Bootstrap, follow these steps:

Step 1: Include Bootstrap
Add the Bootstrap CSS and JS CDN links to the <head> section of your HTML.

html
Copy code
<!-- Bootstrap CSS -->
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

<!-- Optional Bootstrap JavaScript and jQuery if you're using Bootstrap's JS components -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
Step 2: Update HTML with Bootstrap Classes
Modify your HTML elements by adding appropriate Bootstrap classes. This will allow your elements to adopt Bootstrap's styles and responsive behavior:

<div class="container mt-5">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="input-group mb-3">
                <input type="number" id="num1" class="form-control" placeholder="First Number">
                <select id="operation" class="custom-select">
                    <option value="add">+</option>
                    <option value="subtract">-</option>
                    <option value="multiply">*</option>
                    <option value="divide">/</option>
                </select>
                <input type="number" id="num2" class="form-control" placeholder="Second Number">
                <div class="input-group-append">
                    <button onclick="calculate()" class="btn btn-primary">Calculate</button>
                </div>
            </div>
            <div>
                <p class="lead">Result: <span id="result">0</span></p>
            </div>
        </div>
    </div>
</div>

Step 3: Custom CSS
You can write custom CSS to give your application a unique appearance. Create a styles.css file:

body {
    font-family: 'Arial', sans-serif;
    background-color: #f7f8fa;
}

.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

button {
    width: 100px;
}

Include the styles.css in your <head> section:

<link rel="stylesheet" href="styles.css">


Description:
We created a Calculator class with four methods: add, subtract, multiply, and divide.
The calculate() function is called when the button is pressed.
We use the switch statement to decide which calculator method to call based on the selected operation.
We use the try-catch block to handle any errors. If the user tries to divide by zero, an alert will be shown, and the console will print "Calculation attempted" due to the finally block.
This is a simple example, but it incorporates the requested features. Feel free to expand on this base to create more complex web applications!

Basic Calculator Web Application
Our Basic Calculator Web Application is a user-friendly tool that can perform fundamental arithmetic operations such as addition, subtraction, multiplication, and division. Below, you'll find instructions on how to use the site and a technical walkthrough highlighting the incorporation of JavaScript concepts including classes, switch statements, and try-catch-finally statements.

Instructions for Use:
Input Data: Enter two numerical values into the provided input fields.
Choose Operation: From the dropdown list, select the desired arithmetic operation (+, -, *, /).
Calculate: Click on the "Calculate" button to view the result.
Error Alerts: In case of invalid operations, like division by zero, an alert will be displayed.
Technical Walkthrough:
1. Classes
In modern JavaScript, the class syntax is a way to define a "blueprint" for creating objects. Here, we implemented a Calculator class to encapsulate all arithmetic operations:

class Calculator {
    // ... methods for arithmetic operations
}

Each method inside this class corresponds to an arithmetic operation. The advantage of using a class is to group related methods together, making the code more maintainable and understandable.

2. Switch Statements
The switch statement provides a more readable way to handle multiple conditions. Instead of a series of if-else conditions, the switch statement provides a cleaner structure. In our application:

switch (operation) {
    // ... cases for each arithmetic operation
}

The operation variable determines which case will be executed. This variable gets its value from the selected dropdown option in the HTML. If the user selects "+", the "add" case will run, and so on.

3. Try-Catch-Finally Statements
In JavaScript, error handling is an essential aspect of robust programming. The try-catch-finally statement captures and handles exceptions seamlessly:

try {
    // ... perform calculations
} catch (error) {
    // ... handle error scenarios
} finally {
    // ... always execute this block
}

In our application, if a user attempts to divide by zero, it triggers an error. Instead of crashing, our try-catch block handles it gracefully by showing an alert. The finally block is executed regardless of whether an error occurred. In our case, it prints a console message, but in real-world applications, it could be used to close database connections or perform other cleanup tasks.

Conclusion:
The incorporation of classes, switch statements, and try-catch-finally into our Basic Calculator Web Application demonstrates the flexibility and robustness of modern JavaScript. These constructs allow for a modular design, clean conditional checks, and graceful error handling, ensuring both maintainability and user-friendliness.
