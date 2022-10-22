import React from "react";

function AddExpense() {
  return (
    <div>
      <h1>Spend yo dolla</h1>
      <form>
        {
          // description
          // category (dropdown)
          // necessity
          // amount
          // date
        }

        <label>
          Description
          <input type="text" aria-label="description of the expense"></input>
        </label>

        <label>
          Category
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
        </label>

        <label>
          How much?
          <input
            type="number"
            aria-label="amount of money for the expense"
          ></input>
        </label>

        <label>
          What date is this for?
          <input type="date" aria-label="the date of the expense"></input>
        </label>

        <button>Add</button>
      </form>
    </div>
  );
}

export default AddExpense;
