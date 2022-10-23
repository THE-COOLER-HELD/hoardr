import React from "react";
import AddExpense from "../AddExpense/AddExpense";
import AddIncome from "../AddIncome/AddIncome";
import ExpenseCard from "./ExpenseCard";
import useViewExpenses from "../../hooks/useViewExpenses";

function ViewExpenses() {
	const {
		openExpense,
		openIncome,
		toggleExpenseModal,
		toggleIncomeModal,
		expensesList,
		filterTransactions
	} = useViewExpenses();

	return (
		<div width='100vw'>
			<h2 className='transactions-text'>Transactions</h2>
			<button className='add-expense-button' onClick={toggleExpenseModal}>
				Add Expense
			</button>
			<button className='add-income-button' onClick={toggleIncomeModal}>
				Add Income
			</button>
			<select onChange={filterTransactions}>
				<option>Incoming</option>
				<option>Outgoing</option>
			</select>
			{openExpense && <section>{<AddExpense />}</section>}
			{openIncome && <section>{<AddIncome />}</section>}
			<ul className='expense-list'>
				{expensesList.map((expense) => {
					return (
						<li key={expense.transaction_id}>
							<ExpenseCard expense={expense} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default ViewExpenses;
