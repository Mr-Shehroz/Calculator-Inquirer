import inquirer from "inquirer";

class Cal {
    addition(a:number, b:number):number {
        return a+b
    }
    subtraction(a:number, b:number):number {
        return a-b
    }
    multiplication(a:number, b:number):number {
        return a*b
    }
    division(a:number, b:number):number {
        if (a == 0 || b == 0) {
            throw new Error("division by 0 is not allowed");
        }
        return a/b
}
}
async function main() {
    const calculation = new Cal();
    const answers = await inquirer.prompt([{
        type: "input",
        name: "num1",
        message: "Enter the first number",
        default: "0",
        validate: (input) => !isNaN(Number(input)) || "Please enter a valid number",
    },
    {
        type: "input",
        name: "num2",
        message: "Enter the second number",
        default: "0",
        validate: (input) => !isNaN(Number(input)) || "Please enter a valid number",
    },
    {
        type: "list",
        name: "operation",
        message: "Select an operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
])
    const firstNumber = Number(answers.num1);
    const secondNumber = Number(answers.num2);
    const operation = answers.operation;
    let result:number = 0
    if (operation === "Addition") {
        result = calculation.addition(firstNumber, secondNumber);
    }
    else if (operation === "Subtraction") {
        result = calculation.subtraction(firstNumber, secondNumber);
    }
    else if (operation === "Multiplication") {
        result = calculation.multiplication(firstNumber, secondNumber);
    }
    else if (operation === "Division") {
        result = calculation.division(firstNumber, secondNumber);
    }
    console.log(`The result of ${firstNumber} ${operation} ${secondNumber} is ${result}`);
    
}
main()