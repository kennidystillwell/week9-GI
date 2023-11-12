let totalIncome = 0;
let totalExpenses = 0;

function addIncome() {
    const description = document.getElementById('income-description').value;
    const amount = parseFloat(document.getElementById('income-amount').value);

    if (description && !isNaN(amount) && amount > 0) {
        totalIncome += amount;
        updateTotals();
    } else {
        alert('Please enter a valid description and amount for income.');
    }
}

function addExpense() {
    const description = document.getElementById('expense-description').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (description && !isNaN(amount) && amount > 0) {
        totalExpenses += amount;
        updateTotals();
    } else {
        alert('Please enter a valid description and amount for expenses.');
    }
}

function clearFields() {
    document.getElementById('income-description').value = '';
    document.getElementById('income-amount').value = '';
    document.getElementById('expense-description').value = '';
    document.getElementById('expense-amount').value = '';
}


function updateTotals() {
    const totalIncomeElement = document.getElementById('total-income');
    const totalExpensesElement = document.getElementById('total-expenses');
    const budgetRemainingElement = document.getElementById('budget-remaining');

    totalIncomeElement.textContent = totalIncome.toFixed(2);
    totalExpensesElement.textContent = totalExpenses.toFixed(2);

    const budgetRemaining = totalIncome - totalExpenses;
    budgetRemainingElement.textContent = budgetRemaining.toFixed(2);
}

document.getElementById('add-income-btn').addEventListener('click', addIncome);
document.getElementById('add-expense-btn').addEventListener('click', addExpense);
document.getElementById('clear-btn').addEventListener('click', clearFields);

updateTotals();