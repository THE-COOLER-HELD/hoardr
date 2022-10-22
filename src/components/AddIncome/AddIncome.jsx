import React from "react";

function AddIncome() {
  return (
    <div>
      <h1>Add to your Hoard</h1>
      <form>
        <label>
          {" "}
          How much?
          <input type="number" aria-label="amount of money to add"></input>
        </label>

        <label></label>
      </form>
    </div>
  );
}

export default AddIncome;
