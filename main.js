#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 12345;
let pinanswer = await inquirer.prompt([{
        name: "pin",
        message: "Enter your pin",
        type: "number",
    }
]);
if (pinanswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationanswer = await inquirer.prompt([
        { name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Withdraw", "fast cash", "Check balance"]
        }
    ]);
    if (operationanswer.operation === "Withdraw") {
        let amountanswer = await inquirer.prompt([
            { name: "amount",
                message: "Enter your amount",
                type: "number",
            }
        ]);
        if (amountanswer.amount > myBalance) {
            console.log("Insuficent balance");
        }
        else {
            myBalance -= amountanswer.amount;
            console.log(`Your remaining balance is   ${myBalance}`);
        }
    }
    else if (operationanswer.operation === "fast cash") {
        let fast = await inquirer.prompt([
            {
                name: "fastcash",
                message: "select amount which you withdrawal",
                type: "list",
                choices: [1000, 2000, 5000, 10000]
            }
        ]);
        myBalance -= fast.fastcash;
        console.log(`You have successsfully withdrawal ${fast.fastcash} \nYour remaining balance is ${myBalance}`);
    }
    else if (operationanswer.operation === "Check balance") {
        console.log(`Your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
