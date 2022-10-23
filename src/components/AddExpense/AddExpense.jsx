import React from "react";
import { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { addTransaction } from "../../supabaseQueries";

function AddExpense() {
  const [expense, setExpense] = useState({isOutgoing: true, description: ""})
  const { user } = useContext(UserContext)

  const onChange = (key, value) => {
    setExpense((currentState) => {
      const expense = {...currentState}
      expense[key] = value
      return expense
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const expenseCopy = {...expense}
    expenseCopy.uuid = user.id
    addTransaction(expenseCopy).then((data) => {
    })
  }

  return (
		<div className="add-expense-modal">
			<h1 className="expense-head">Burn yo cash - 🐲</h1>
			<form className="expense-form">
				{
					// description
					// category (dropdown)
					// necessity
					// amount
					// date
				}

				<label>Description</label>
				<input
					type="text"
					aria-label="description of the expense"
				></input>

				<label>Category</label>
				<select aria-label="choose the category of the expense">
					<option>Rent</option>
					<option>Bills</option>
					<option>Transport</option>
					<option>Subscriptions</option>
					<option>Bad Decisions</option>
					<option>Going out</option>
					<option>Food/Shopping</option>
					<option>Takeout</option>
					<option>Clothes</option>
				</select>

				<label>How much?</label>
				<input
					type="number"
					aria-label="amount of money for the expense"
				></input>

				<label>What date is this for?</label>
				<input type="date" aria-label="the date of the expense"></input>


				<button className="add-button">Add</button>
			</form>
		</div>
  );
}

export default AddExpense;
