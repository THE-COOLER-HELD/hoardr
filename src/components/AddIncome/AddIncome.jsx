import React from "react";
import { useState, useContext} from "react";
import UserContext from "../../contexts/UserContext";
import { addTransaction } from "../../supabaseQueries"

function AddIncome() {
  const [expense, setExpense] = useState({category: null, isOutgoing: false, description: ""})
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

    <div className="add-income-modal">
      <h1 className="income-head">Add to your Hoard</h1>
      <form className="add-income-form">
        <label> How much?</label>
        <input type="number" aria-label="amount of money to add"></input>

        <label>When did you acquire this?</label>
        <input type="date" aria-label="date of income"></input>


        <button className="add-hoard-button">Add to hoard</button>
      </form>
    </div>
  );
}

export default AddIncome;
