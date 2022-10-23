import React, { useState } from "react";
import AddExpense from "../AddExpense/AddExpense";
import AddIncome from "../AddIncome/AddIncome";
import ExpenseCard from "./ExpenseCard";

function ViewExpenses() {
  const [openExpense, setOpenExpense] = useState(false);
  const [openIncome, setOpenIncome] = useState(false);
  const [expensesList, setExpensesList] = useState([
    {
      description: "Hamster",
      category: "Lifestyle",
      amount: "5",
      necessary: true,
      date: new Date(Date.now()).toLocaleDateString("EN", "dd/mm/yy"),
      outgoing: true,
    },
    {
      description: "I went to the market and bought an egg",
      category: "Food",
      amount: "0.72",
      necessary: true,
      date: new Date(Date.now()).toLocaleDateString("EN", "dd/mm/yy"),
      outgoing: true,
    },
  ]);

  function toggleExpenseModal() {
    if (openIncome) {
      setOpenIncome(!openIncome);
    }
    setOpenExpense(!openExpense);
  }

  function toggleIncomeModal() {
    if (openExpense) {
      setOpenExpense(!openExpense);
    }
    setOpenIncome(!openIncome);
  }

  return (
    <div width="100vw">
      <h2 className="transactions-text">Transactions</h2>
      <button className="add-expense-button" onClick={toggleExpenseModal}>
        Add Expense
      </button>
      <button className="add-income-button" onClick={toggleIncomeModal}>
        Add Income
      </button>
      {openExpense && <section>{<AddExpense />}</section>}
      {openIncome && <section>{<AddIncome />}</section>}
      <ul className="expense-list">
        {expensesList.map((expense) => {
          return <ExpenseCard expense={expense} />;
        })}
      </ul>
    </div>
  );
}

export default ViewExpenses;
