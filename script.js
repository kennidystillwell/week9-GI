//declared and initializes variables to track total income and expenses
let totalIncome = 0;
let totalExpenses = 0;

//adding event listeners to each button
document.getElementById('add-income-btn').addEventListener('click', addIncome);
document.getElementById('add-expense-btn').addEventListener('click', addExpense);
document.getElementById('clear-btn').addEventListener('click', clearFields);

//initialize displayed totals
updateTotals();

//created function to handle adding income
function addIncome() {
    //grabs input values for income description and amount
    const description = document.getElementById('income-description').value;
    const amount = parseFloat(document.getElementById('income-amount').value);

    //checks if the input values are valid
    if (description && !isNaN(amount) && amount > 0) {
        totalIncome += amount; //adds income amount to total income
        updateTotals(); //updates displayed totals
    } else {
        //displays alert if input value isnt valid
        alert('Please enter a valid description and amount for income.');
    }
}

//created function to handle adding expenses
function addExpense() {
    //grabs input values for expense description and amount
    const description = document.getElementById('expense-description').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    //checks if the input values are valid
    if (description && !isNaN(amount) && amount > 0) {
        totalExpenses += amount; //adds expense amount to total expense
        updateTotals(); //updates displayed totals
    } else {
        //displays alert if input value isnt valid
        alert('Please enter a valid description and amount for expenses.');
    }
}

//created function that clears input fields
function clearFields() {
    document.getElementById('income-description').value = '';
    document.getElementById('income-amount').value = '';
    document.getElementById('expense-description').value = '';
    document.getElementById('expense-amount').value = '';
}

//created function to update displayed totals
function updateTotals() {
    //referencing html elements linked to displaying total income, total expenses, and total budget
    const totalIncomeElement = document.getElementById('total-income');
    const totalExpensesElement = document.getElementById('total-expenses');
    const budgetRemainingElement = document.getElementById('total');
    //updates displayed total income and total expense with fixed decimal places
    totalIncomeElement.textContent = totalIncome.toFixed(2);
    totalExpensesElement.textContent = totalExpenses.toFixed(2);
    //calculates total budget and updates displayed total with fixed decimal places
    const budgetRemaining = totalIncome - totalExpenses;
    budgetRemainingElement.textContent = budgetRemaining.toFixed(2);
}
