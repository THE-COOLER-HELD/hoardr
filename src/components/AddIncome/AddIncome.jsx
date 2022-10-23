import React from "react";
import useAddIncome from "../../hooks/useAddIncome";

function AddIncome({ setExpensesList }) {
  const { onChange, onSubmit } = useAddIncome(setExpensesList);

  return (
    <div className="add-income-modal">
      <h1 className="income-head">Add to your Hoard</h1>
      <form onSubmit={onSubmit} className="add-income-form">
        <label> How much?</label>
        <input
          onChange={(event) => {
            onChange("amount", event.target.value);
          }}
          type="number"
          aria-label="amount of money to add"
        ></input>

        <label>When did you acquire this?</label>
        <input
          onChange={(event) => {
            onChange("date", event.target.value);
          }}
          type="date"
          aria-label="date of income"
        ></input>

        <button className="add-hoard-button">Add to hoard</button>
      </form>
    </div>
  );
}

export default AddIncome;
