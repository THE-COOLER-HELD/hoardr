import React from "react";
import AddExpense from "../AddExpense/AddExpense";
import AddIncome from "../AddIncome/AddIncome";
import ExpenseCard from "./ExpenseCard";
import useViewExpenses from "../../hooks/useViewExpenses";
import AddSavings from "../AddSavings/AddSavings";

function ViewExpenses() {
  const {
    openExpense,
    openIncome,
    openSavings,
    toggleExpenseModal,
    toggleIncomeModal,
    toggleSavingsModal,
    expensesList,
    filterTransactions,
    setExpensesList,
  } = useViewExpenses();

  return (
    <div className="transaction-page-container">
      <h2 className="transactions-text">Transactions</h2>
      <section className="transaction-button-container">
        <button
          className="transaction-list-button"
          onClick={toggleExpenseModal}
        >
          Add Expense
        </button>
        <button className="transaction-list-button" onClick={toggleIncomeModal}>
          Add Income
        </button>
        <button
          className="transaction-list-button"
          onClick={toggleSavingsModal}
        >
          View Savings
        </button>
      </section>
      <select className="filter-select" onChange={filterTransactions}>
        <option value="All">All ↯</option>
        <option value={"Incoming"}>Incoming</option>
        <option value={"Outgoing"}>Outgoing</option>
      </select>
      {openExpense && (
        <section>{<AddExpense setExpensesList={setExpensesList} />}</section>
      )}
      {openIncome && (
        <section>{<AddIncome setExpensesList={setExpensesList} />}</section>
      )}
      {openSavings && (
        <section>{<AddSavings setExpensesList={setExpensesList} />}</section>
      )}

      <ul className="expense-list">
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
