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

        <label>
          When did you acquire this?
          <input type="date" aria-label="date of income"></input>
        </label>

        <button>Add to hoard</button>
        <button>Reset hoard</button>
      </form>
    </div>
  );
}

export default AddIncome;
