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
    <div>
      <h1>Add to your Hoard</h1>
      <form onSubmit={onSubmit}>
        <label>
          {" "}
          How much?
          <input type="number" onChange={(event) => onChange("amount", event.target.value)} aria-label="amount of money to add"></input>
        </label>

        <label>
          When did you acquire this?
          <input type="date" onChange={(event) => onChange("date", event.target.value)} aria-label="date of income"></input>
        </label>

        <button>Add to hoard</button>
        <button>Reset hoard</button>
      </form>
    </div>
  );
}

export default AddIncome;
