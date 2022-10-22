import React from "react";

function AddIncome() {

  return (
		<div className="add-income-modal">
			<h1 className="income-head">Add to your Hoard</h1>
			<form className="add-income-form">
				<label> How much?</label>
				<input
					type="number"
					aria-label="amount of money to add"
				></input>

				<label>When did you acquire this?</label>
				<input type="date" aria-label="date of income"></input>

				<button className="add-hoard-button">Add to hoard</button>
				<button className="reset-hoard-button">Reset hoard</button>
			</form>
		</div>
  );
}

export default AddIncome;
