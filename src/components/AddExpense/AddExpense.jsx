import React from "react";
import { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { addExpense } from "../../supabaseQueries";

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
    addExpense(expenseCopy).then((data) => {
    })
  }

  return (
    <div>
      <h1>Spend yo dolla</h1>
      <form onSubmit={onSubmit}>
        {
          // description
          // category (dropdown)
          // necessity
          // amount
          // date
        }

        <label>
          Description
          <input type="text" onChange={(event) => onChange("description", event.target.value)} aria-label="description of the expense"></input>
        </label>

        <label>
          Category
          <select onChange={(event) => onChange("category", event.target.value)} aria-label="choose the category of the expense">
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
        </label>

        <label>
          How much?
          <input onChange={(event) => onChange("amount", event.target.value)}
            type="number"
            aria-label="amount of money for the expense"
          ></input>
        </label>

        <label>
          What date is this for?
          <input onChange={(event) => onChange("date", event.target.value)} type="date" aria-label="the date of the expense"></input>
        </label>

        <button>Add</button>
      </form>
    </div>
  );
}

export default AddExpense;
