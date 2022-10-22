import React, { useState } from 'react';
import AddExpense from '../AddExpense/AddExpense';
import AddIncome from '../AddIncome/AddIncome';
import ExpenseCard from './ExpenseCard';
// import { useNavigate } from 'react-router-dom';

function ViewExpenses() {
    const [openExpense, setOpenExpense] = useState(false);
    const [openIncome, setOpenIncome] = useState(false);
	const [expensesList, setExpensesList] = useState([
		{
			description: 'Hamster',
			category: 'Lifestyle',
			amount: '5',
			necessary: true,
			date: Date.now().toString(),
			outgoing: true,
		},
	]);

	function toggleExpenseModal() {
        if (openIncome) {
            setOpenIncome(!openIncome)
        }
        setOpenExpense(!openExpense)
    }
    
    function toggleIncomeModal() {
		if (openExpense) {
			setOpenExpense(!openExpense);
		}
		setOpenIncome(!openIncome);
	}

	return (
		<div>
			<h1>Transactions</h1>
                <button onClick={toggleExpenseModal}>Add Expense</button>
                <button onClick={toggleIncomeModal}>Add Income</button>
                {openExpense && <section>{<AddExpense />}</section>}
                {openIncome && <section>{<AddIncome />}</section>}
			<ul>
				{expensesList.map((expense) => {
					return <ExpenseCard expense={expense} />;
				})}
			</ul>

		</div>
	);
}

export default ViewExpenses;
