console.log("Hello spendewise!!")

let totalBudget;


let expenseName;
let category;
let expenseAmount;

let date;

let totalBalance;
totalBudget=Number(prompt("Enter your total budget:"));

expenseName=Number(prompt("Enter expense name:"))
expenseAmount=Number(prompt("Enter expense amount:"))
category=Number(prompt("Enter expense category:"))
date= new Date().getDate()
totalBalance=totalBudget-expenseAmount


function calculateBalance(totalBudget,expense){
    return Number(totalBudget)-Number(expense)
}


console.log("bal:",calculateBalance(500,200))
console.log("Balance:",totalBalance)
