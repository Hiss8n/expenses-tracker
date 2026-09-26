
const appName=""
window.addEventListener('DOMContentLoaded',function(){
document.getElementById("app-name").innerHTML="SpendWise"
showStats()
})

const expenses=[];
let totalAmount=60000

const form=document.getElementById("expense-form");
const tableBody=document.getElementById("table-body");
const tableAmount=document.getElementById("total-amount").innerHTML=totalAmount;

form.addEventListener("submit",function(event){
  event.preventDefault()
  /* Get all the input value */

  

const expenseName=document.getElementById("expense-name").value
const expenseAmount=Number(document.getElementById("expense-amount").value)
const expenseCategory=document.getElementById("expense-category").value
const date = new Date().toISOString().split("T")[0];

if(!expenseName |! expenseAmount | !expenseCategory){
  return alert('must enter all expense fields')
}
const expense={
  totalAmount,
  expenseName,
  expenseAmount,
  expenseCategory,
  date

}

expenses.push(expense)

console.log(expenses)

/* Display expenses from the DOM */

displayExpenses()

form.reset()
})

function displayExpenses(){

  tableBody.innerHTML=''

  expenses.forEach(function(expense){
    const row=document.createElement("tr")

    row.innerHTML=`
    <td>${expense.expenseName}</td>
    <td>${expense.expenseAmount}</td>
    <td>${expense.expenseCategory}</td>
    <td>${expense.date}</td>
    `
 tableBody.appendChild(row)
  })
  

 showStats()
  console.log(tableBody)
}


function showStats(){

  let totalExpenses=0;

  expenses.forEach(function(expense){
    totalExpenses+=expense.expenseAmount
  })
 let budget=totalAmount;
 let reminder=budget-totalExpenses


 document.getElementById("total-amount").innerHTML=totalAmount;
 document.getElementById("total-expenses").innerHTML=totalExpenses;
document.getElementById("total-balances").innerHTML=reminder;




}